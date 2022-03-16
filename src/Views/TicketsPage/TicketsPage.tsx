import { Typography } from '@mui/material';
import React from 'react';
import { SideBar } from '../SideBar/Sidebar';
import Box from '@mui/material/Box';
import { IFlightGeneral } from './TicketsPageAux';
import Ticket from './Ticket/Ticket';

interface ITicketsPage {
  setNumberOfFlightsVisible: React.Dispatch<React.SetStateAction<number>>;
  setTransfersStatus: React.Dispatch<React.SetStateAction<string>>;
  setToCost: React.Dispatch<React.SetStateAction<string>>;
  setFromCost: React.Dispatch<React.SetStateAction<string>>;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
  flightToView: Array<IFlightGeneral>;
  numberOfFlightsVisible: number;
}

export const TicketsPage: React.FC<ITicketsPage> = ({
  setNumberOfFlightsVisible,
  setTransfersStatus,
  setToCost,
  setFromCost,
  setSortType,
  flightToView,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar
        setTransfersStatus={setTransfersStatus}
        setToCost={setToCost}
        setFromCost={setFromCost}
        setSortType={setSortType}
      />
      {flightToView.map((flight) => {
        return <Ticket key={flight.flightToken} flight={flight.flight} />;
      })}
    </Box>
  );
};
