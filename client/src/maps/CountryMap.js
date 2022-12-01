import React, { memo, useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";
import Slider from "../buttons/slider";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = ({ setTooltipContent }) => {
  const [count, setCount] = useState(13); // used to keep track of dataset
  const [data, setData] = useState([]); // used to keep track of the rendered data
  // const [path, setPath] = useState(geoUrl);

  // updates the dataset rendered when the slider changes
  const handleSliderClick = (event, num) => {
    console.log(event.target);
    setCount(num);
  };

  const handleClick = (event) => {
    console.log(event.target);
  }

  // load in csv data
  useEffect(() => {
    csv( `/data/clean-data/f${count}_state.csv` ).then(states => {
      setData(states);
    });
  }, [count]);

  // color scale 
  const colorScale = scaleQuantile()
    .domain([0, 5, 10, 50, 100, 200, 250, 300, 500, 700, 800, 850, 1000, 2000, 10000, 15000, 30000])
    .range([
      "#ffeee6",
      "#ffddcc",
      "#ffccb3",
      "#ffbb99",
      "#ffaa80",
      "#ff9966",
      "#ff884d",
      "#ff7733",
      "#ff661a",
      "#ff5500",
      "#e64d00",
      "#cc4400",
      "#b33c00",
      "#993300",
      "#802b00",
      "#662200",
      "#4d1a00"
    ]);

  return (
    <>
    <ComposableMap 
    data-tip=""
    projection="geoAlbersUsa"
    projectionConfig={{ scale: 750 }}
    width={800}
    height={350}
    style={{
      width: "100%", 
      height: "80%",
      margin: -10, 
    }}
    >
        {/* mapping the data to the county components */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const cur = data.find(s => s.state_name === geo.properties.name);
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
                    setTooltipContent(`${geo.properties.name}: ${cur.population}`);
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
                  onClick={handleClick}
                />
              );
            })
          }
        </Geographies>
    </ComposableMap>
    <Slider handleSliderClick={handleSliderClick}/>
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
