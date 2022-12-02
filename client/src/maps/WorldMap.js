import React, { useEffect, useState, memo } from "react";
import ReactTooltip from "react-tooltip";
import { csv } from "d3-fetch";
import { scaleQuantile } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";
import Slider from "../buttons/slider2";

const geoUrl = "/worlds.json";

const MapChart = ({setTooltipContent}) => {
  const [count, setCount] = useState(17); // used to keep track of dataset
  const [data, setData] = useState([]); // used to keep track of the rendered data

  // updates the dataset rendered when the slider changes
  const handleSliderClick = (event, num) => {
    console.log(event.target);
    setCount(num);
  };

  const handleClick = (event) => {
    console.log(event.target);
  }

  useEffect(() => {
    csv(`/data/clean-data/countries/f${count}_world.csv`).then((data) => {
      setData(data);
    });
  }, [count]);

  const colorScale = scaleQuantile()
  .domain([0, 1, 3, 5, 20, 40, 50, 100, 500, 1000, 5000, 6000, 10000, 15000, 25000, 50000])
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
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
      width={800}
      height={350}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = data.find((s) => s.id === geo.id);
              return (
                <Geography
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
      )}
    </ComposableMap>
    <Slider handleSliderClick={handleSliderClick}/>
    </>
  );
};

function WorldMap() {
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

export default memo(WorldMap);

