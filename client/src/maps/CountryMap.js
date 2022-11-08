import React, { memo, useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";
import MapSlider from "../buttons/slider";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const MapChart = ({ setTooltipContent}) => {
  const [data, setData] = useState([]);
  // const [counter, setCounter] = useState([]);

  useEffect(() => {
    // change 22 to counter
    csv( `/data/f${22}_clean.csv`).then(counties => {
      setData(counties);
    });
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
        {/* mapdping the data to the county components */}
        
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const cur = data.find(s => s.id === geo.id);
              return (
                <Geography
                  // mapping color values to each county
                  key={geo.rsmKey}
                  geography={geo}
                  fill={cur ? colorScale(cur.population) : "#EEE"}
                  // setting hover feature 
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name} County: ${cur.population}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    hover: {
                      fill: "#000",
                      outline: "none"
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
    </ComposableMap>
    </div>
    <MapSlider></MapSlider>
    </>
  );
};


function CountryMap() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>
        {content}
      </ReactTooltip>
    </div>
  );
}

export default memo(CountryMap);
