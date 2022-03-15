import { Typography } from '@mui/material';
import React from 'react';
import { SideBar } from '../SideBar/Sidebar';
import Box from '@mui/material/Box';

interface ITicketsPage {
  setNumberOfFlightsVisible: React.Dispatch<React.SetStateAction<number>>;
  setTransfersStatus: React.Dispatch<React.SetStateAction<string>>;
  setToCost: React.Dispatch<React.SetStateAction<string>>;
  setFromCost: React.Dispatch<React.SetStateAction<string>>;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
  numberOfFlightsVisible: number;
  transfersStatus: string;
  sortType: string;
  fromCost: string;
  toCost: string;
}

export const TicketsPage: React.FC<ITicketsPage> = ({
  setNumberOfFlightsVisible,
  setTransfersStatus,
  setToCost,
  setFromCost,
  setSortType,
  numberOfFlightsVisible,
  transfersStatus,
  sortType,
  fromCost,
  toCost,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar
        setNumberOfFlightsVisible={setNumberOfFlightsVisible}
        setTransfersStatus={setTransfersStatus}
        setToCost={setToCost}
        setFromCost={setFromCost}
        setSortType={setSortType}
      />
      <Typography variant='h1'>123</Typography>
    </Box>
  );
};
