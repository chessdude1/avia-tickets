import React from 'react';
import Box from '@mui/material/Box';
import { Leg } from '../../TicketsPageAux';

interface IFlight {
  flight: Leg;
}

export const Flight: React.FC<IFlight> = ({ flight }) => {
  let flightConvertedData = {};

  if (flight.segments.length === 2) {
    flightConvertedData.duration = flight.duration;
    flightConvertedData.tra;
  }
  return (
    <Box>
      <div>Flight</div>
    </Box>
  );
};
