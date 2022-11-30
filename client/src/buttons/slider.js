// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// // const marks = [
// //   {value: 13, label: `2013`}, 
// //   {value: 14, label: `2014`}, 
// //   {value: 15, label: `2015`}, 
// //   {value: 16, label: `2016`}, 
// //   {value: 17, label: `2017`}, 
// //   {value: 18, label: `2018`}, 
// //   {value: 19, label: `2019`}, 
// //   {value: 20, label: `2020`}, 
// //   {value: 21, label: `2021`}, 
// //   {value: 22, label: `2022`}
// // ]

// function valuetext(value) {
//   return `20${value}`;
// }

// // function valueLabelFormat(value) {
// //   return marks.findIndex((mark) => mark.value === value) + 1;
// // }

// export default function MapSlider({handleSliderClick}) {
//   return (
//     <Box sx={{ width: 300 }}>
//       <Slider
//         aria-label="Temperature"
//         defaultValue={22}
//         getAriaValueText={valuetext}
//         valueLabelDisplay="auto"
//         step={1}
//         min={13}
//         max={22}
//         onChange={event => handleSliderClick(event, value)}
//       />
//     </Box>
//   );
// }


// import React from 'react';

// const Slider = ({handleSliderClick}) => {
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
//       <button onClick={event => handleSliderClick(event, 1)}>+</button>
//       <button onClick={event => handleSliderClick(event, -1)}>-</button>
//     </div>
//     </>
//   );
// };

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function valueLabelFormat(value) {
  return `20${value}`;
}

export default function MapSlider({handleSliderClick}) {
  const [value, setValue] = useState(13);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
      handleSliderClick(event, newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Year: {valueLabelFormat(value)}
      </Typography>
      <Slider
        value={value}
        min={13}
        step={1}
        max={22}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
