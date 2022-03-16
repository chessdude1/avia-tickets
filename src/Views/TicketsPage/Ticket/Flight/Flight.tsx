import React from 'react';
import Box from '@mui/material/Box';
import { Leg } from '../../TicketsPageAux';
import { Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface IFlight {
  flight: Leg;
}

interface IFlightConvertedData {
  duration: string;
  arrivalDate: string;
  arrivalCity: string;
  departureCity: string;
  departureDate: string;
  airline: string;
  departureAirport: { uid: string; caption: string };
  arrivalAirport: { uid: string; caption: string };
  transferAirport?: { uid: string; caption: string };
}

export const Flight: React.FC<IFlight> = ({ flight }) => {
  let flightConvertedData: IFlightConvertedData = {
    duration: '1h',
    arrivalDate: '',
    arrivalCity: '',
    departureCity: '',
    departureDate: '',
    airline: '',
    departureAirport: { uid: '', caption: '' },
    arrivalAirport: { uid: '', caption: '' },
  };

  if (flight.segments.length === 2) {
    flightConvertedData.duration = getFlightDuration(flight.duration);
    flightConvertedData.transferAirport = flight.segments[1].departureAirport;
    flightConvertedData.departureAirport = flight.segments[0].departureAirport;
    flightConvertedData.arrivalAirport = flight.segments[1].arrivalAirport;
    flightConvertedData.arrivalDate = getDate(flight.segments[1].arrivalDate);
    flightConvertedData.arrivalCity = flight.segments[1].arrivalCity.caption;
    flightConvertedData.departureCity =
      flight.segments[0].departureCity.caption;
    flightConvertedData.departureDate = getDate(
      flight.segments[0].departureDate
    );
    flightConvertedData.airline = flight.segments[0].airline.caption;
  } else {
    flightConvertedData.arrivalCity = flight.segments[0].arrivalCity.caption;
    flightConvertedData.departureCity =
      flight.segments[0].departureCity.caption;
    flightConvertedData.duration = getFlightDuration(flight.duration);
    flightConvertedData.departureAirport = flight.segments[0].departureAirport;
    flightConvertedData.arrivalAirport = flight.segments[0].arrivalAirport;
    flightConvertedData.arrivalDate = getDate(flight.segments[0].arrivalDate);
    flightConvertedData.departureDate = getDate(
      flight.segments[0].departureDate
    );
    flightConvertedData.airline = flight.segments[0].airline.caption;
  }

  function getFlightDuration(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const minutesHours = minutes % 60;
    return `${hours === 0 ? '' : hours} ч ${
      minutesHours === 0 ? '' : minutesHours
    } мин`;
  }

  function getDate(timestampDate: string): string {
    const dateObj = new Date(timestampDate);
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'птн', 'суб'];
    let months = [
      'янв',
      'фев',
      'март',
      'апр',
      'май',
      'июнь',
      'июль',
      'авг',
      'сент',
      'окт',
      'нояб',
      'дек',
    ];
    return `${dateObj.getHours() === 0 ? '' : dateObj.getHours()}:${
      dateObj.getMinutes() === 0 ? '' : dateObj.getMinutes()
    } ${dateObj.getDate()} ${months[dateObj.getMonth()]}  ${
      days[dateObj.getDay()]
    } `;
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '50vw',
          justifyContent: 'space-between',
        }}
      >
        <Typography>
          {flightConvertedData.departureCity},
          {flightConvertedData.departureAirport.caption},
          {flightConvertedData.departureAirport.uid}
        </Typography>
        <Typography>
          {flightConvertedData.arrivalCity},
          {flightConvertedData.arrivalAirport.caption},
          {flightConvertedData.arrivalAirport.uid}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        <Typography>{flightConvertedData.departureDate}</Typography>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          {flightConvertedData.duration} <AccessTimeIcon />
        </Typography>
        <Typography>{flightConvertedData.arrivalDate}</Typography>
      </Box>
      <Typography>
        {flightConvertedData.transferAirport ? '1 пересадка' : ''}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: '10px',
          marginTop: '10px',
        }}
      >
        <Typography>Рейс выполняет: {flightConvertedData.airline}</Typography>
      </Box>
    </>
  );
};
