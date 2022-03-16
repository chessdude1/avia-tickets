import React from 'react';
import { SideBar } from '../SideBar/Sidebar';
import Box from '@mui/material/Box';
import { IFlightGeneral } from './TicketsPageAux';
import { Ticket } from './Ticket/Ticket';
import { CustomButton } from '../../Common/UI/CustomButton';
import { Typography } from '@mui/material';

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
    <Box sx={{ display: 'flex', marginTop: '20px' }}>
      <SideBar
        setTransfersStatus={setTransfersStatus}
        setToCost={setToCost}
        setFromCost={setFromCost}
        setSortType={setSortType}
      />
      {flightToView.length !== 0 ? (
        <Box sx={{ margin: '0 auto' }}>
          {flightToView.map((flight) => {
            return <Ticket key={flight.flightToken} flight={flight.flight} />;
          })}
          <CustomButton
            onClick={() => {
              setNumberOfFlightsVisible((prev) => prev + 2);
            }}
            variant={'text'}
            text={'Показать еще'}
          />
        </Box>
      ) : (
        <Typography sx={{ margin: '20px' }}>
          Билетов соответствующих заданным фильтрам не найдено
        </Typography>
      )}
    </Box>
  );
};
