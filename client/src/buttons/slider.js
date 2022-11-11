import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function MapSlider() {
  return (
    <Box sx={{ width: 600 }}>
      <Slider
        defaultValue={30}
        // textAlign: "center" as const
        valueLabelDisplay="auto"
        step={1}
        marks
        min={2013}
        max={2022}
      />
    </Box>
  );
}


// import { useState } from "react";
// import ReactSlider from "react-slider";
// import "./slider.css";

// const Slider = () => {
//   const [currentValue, setCurrentValue] = useState(2013);

//   return (
//     <ReactSlider
//       className="customSlider"
//       thumbClassName="customSlider-thumb"
//       trackClassName="customSlider-track"
//       markClassName="customSlider-mark"
//       marks={20}
//       min={2013}
//       max={2022}
//       defaultValue={2013}
//       value={currentValue}
//       onChange={(value) => setCurrentValue(value)}
//       renderMark={(props) => {
//          if (props.key < currentValue) {
//            props.className = "customSlider-mark customSlider-mark-before";
//          } else if (props.key === currentValue) {
//            props.className = "customSlider-mark customSlider-mark-active";
//          }
//          return <span {...props} />;
//       }}
//     />
//   );
// };

// export default Slider;

// // import React, {useEffect, useState} from 'react';

// const Slider = ({handleClick}) => {
//   // const [count] = useState(22);

//   // useEffect(() => {
//   //   console.log('Count is now: ', count);
//   // }, [count]);

//   // const increase = event => {
//   //   if (count < 22) {
//   //     setCount(count + 1);
//   //   }
//   // };
//   // const decrease = event => {
//   //   if (count > 13) {
//   //     setCount(count - 1);
//   //   }
//   // };

//   return (
//     <>
//     <div>
//       {/* <h2>Count: 20{count}</h2> */}
//       <button onClick={event => handleClick(event, 1)}>+</button>
//       <button onClick={event => handleClick(event, -1)}>-</button>
//     </div>
//     </>
//   );
// };



// export default Slider;


