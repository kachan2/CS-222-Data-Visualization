import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function valueLabelFormat(value) {
  return `20${value}`;
}

export default function MapSlider({handleSliderClick}) {
  const [value, setValue] = useState(17);

  // updates map when slider is changed
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
      handleSliderClick(event, newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      {/* header for current year */}
      <Typography id="non-linear-slider" gutterBottom>
        Year: {valueLabelFormat(value)}
      </Typography>
      <Slider
      // slider attributes
        value={value}
        min={17}
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
