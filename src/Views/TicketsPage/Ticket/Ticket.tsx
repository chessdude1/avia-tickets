import React from 'react';
import Box from '@mui/material/Box';
import { IFlight } from '../TicketsPageAux';
import { Flight } from './Flight/Flight';

interface ITicket {
  flight: IFlight;
}

export const Ticket: React.FC<ITicket> = ({ flight }) => {
  return (
    <Box>
      {flight.legs.map((leg) => {
        return <Flight flight={leg} />;
      })}
    </Box>
  );
};

export default Ticket;
