import React, { memo, useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";
import Slider from "../buttons/slider";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = ({ setTooltipContent }) => {
  const [count, setCount] = useState(13); // used to keep track of dataset
  const [data, setData] = useState([]); // used to keep track of the rendered data
  // const [zoom, setZoom] = useState(1);
  // const [center, setCenter] = useState([0, 0]);

  // updates the dataset rendered when the slider changes
  const handleSliderClick = (event, num) => {
    console.log(event.target);
    setCount(num);
  };

  useEffect(() => {
    csv( `/data/clean-data/f${count}_clean.csv` ).then(counties => {
      setData(counties);
    });
  }, [count]);

  // const handleGeographyClick = (geography, projection, path) => event => {
  //   const centroid = projection.invert(path.centroid(geography));
  //   setCenter(centroid);
  //   setZoom(3);
  // };


  // color scale 
  const colorScale = scaleQuantile()
    .domain(data.map(d => d.population))
    .range([
      "#FBEEE6",
      "#F6DDCC",
      "#EDBB99",
      "#E59866",
      "#DC7633",
      // "#D35400",
      "#BA4A00",
      // "#A04000",
      "#873600",
      // "#6E2C00",
    ]);

  return (
    <>
    <Slider handleSliderClick={handleSliderClick}/>
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
      {/* <ZoomableGroup center={center} zoom={zoom}> */}
        {/* mapdping the data to the county components */}
        <Geographies geography={geoUrl}>
          {({ geographies}) =>
            geographies.map(geo => {
              const cur = data.find(s => s.id === geo.id);
              return (
                <Geography
                  // mapping color values to each county
                  key={geo.rsmKey}
                  geography={geo}
                  // stylistic elements for country map
                  fill={cur ? colorScale(cur.population) : "#FBEEE6"}
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
                  // onClick={handleGeographyClick(geo, projection, path)}
                />
              );
            })
          }
        </Geographies>
      {/* </ZoomableGroup> */}
    </ComposableMap>
    </div>
    {/* <MapSlider handleSliderClick={handleSliderClick}/> */}
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

