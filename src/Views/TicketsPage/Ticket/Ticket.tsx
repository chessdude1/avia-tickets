import React from 'react';
import Box from '@mui/material/Box';
import { IFlight } from '../TicketsPageAux';
import { Flight } from './Flight/Flight';
import { CustomButton } from '../../../Common/UI/CustomButton';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

interface ITicket {
  flight: IFlight;
}

export const Ticket: React.FC<ITicket> = ({ flight }) => {
  return (
    <Card variant='outlined' sx={{ padding: '20px', marginBottom: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          height: '20px',
          alignItems: 'center',
          backgroundColor: '#3f50b5',
          color: 'white',
          padding: '10px',
          marginBottom: '5px',
        }}
      >
        <Typography>
          {flight.price.total.amount} {flight.price.total.currency}
        </Typography>
      </Box>
      {flight.legs.map((leg) => {
        return <Flight key={leg.duration + Math.random()} flight={leg} />;
      })}
      <CustomButton variant='contained' onClick={() => {}} text={'Выбрать'} />
    </Card>
  );
};
