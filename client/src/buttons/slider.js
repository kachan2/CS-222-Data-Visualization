import * as React from 'react';
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