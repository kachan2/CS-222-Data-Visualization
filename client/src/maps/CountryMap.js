import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const CountryMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv("/data/f22_clean.csv").then(counties => {
      setData(counties);
    });
  }, []);

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
    <div>
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
            const cur = data.find(s => s.id === geo.id);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={cur ? colorScale(cur.population) : "#EEE"}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
    </div>
  );
};

export default CountryMap;
