import React, { memo, useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";
import MapSlider from "../buttons/slider";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState([0, 0]);

  const handleGeographyClick = (geography, projection, path) => event => {
    const centroid = projection.invert(path.centroid(geography));
    setCenter(centroid);
    setZoom(3);
  };

  useEffect(() => {
    csv( `/data/clean-data/f${22}_clean.csv` ).then(counties => {
      setData(counties);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // color scale 
  const colorScale = scaleQuantile()
    .domain(data.map(d => d.population))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618"
    ]);

  return (
    <>
    {/* <Slider handleClick={handleClick}/> */}
    <div data-tip="">
    <ComposableMap 
    projection="geoAlbersUsa"
    projectionConfig={{ scale: 1000 }}
    style={{
      width: "100%",
      height: "auto",
      margin: -10, 
    }}
    >
      <ZoomableGroup center={center} zoom={zoom}>
        {/* mapdping the data to the county components */}
        <Geographies geography={geoUrl}>
          {({ geographies, projection, path }) =>
            geographies.map(geo => {
              const cur = data.find(s => s.id === geo.id);
              return (
                <Geography
                  // mapping color values to each county
                  key={geo.rsmKey}
                  geography={geo}
                  // stylistic elements for country map
                  fill={cur ? colorScale(cur.population) : "#EEE"}
                  stroke="#232323"
                  strokeWidth="0.3"
                  // setting hover feature 
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name} County: ${cur.population}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  // fills in shape when hovered over
                  style={{
                    hover: {
                      fill: "#000",
                      outline: "none"
                    }
                  }}
                  // handling zoom-in onclick 
                  onClick={handleGeographyClick(geo, projection, path)}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
    </div>
    <MapSlider />
    </>
  );
};

function CountryMap() {
  const [content, setContent] = useState("");
  return (
    <div>
      {/* setting hover pop up content */}
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>
        {content}
      </ReactTooltip>
    </div>
  );
}

export default memo(CountryMap);


  // const [count, setCount] = useState(22);

  // const handleClick = (event, num) => {
  //   console.log(event.target);
  //   if (num === -1 && count > 13) {
  //      setCount(current => current + num);
  //   } 
  //   if (num === 1 && count < 22) {
  //     setCount(current => current + num);
  //   }

  // };

  // useEffect(() => {
  //   csv( `/data/f${count}_clean.csv` ).then(counties => {
  //     setData(counties);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);