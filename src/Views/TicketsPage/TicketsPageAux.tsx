import React, { useState } from 'react';
import { TicketsPage } from './TicketsPage';
import flights from '../../flights.json';

interface flights {
  result: {
    flights: Array<flight>;
  };
}

interface flight {
  airlineAlliance: { uuid: string; caption: 'string' };
  legs: Array<leg>;
  price: {
    total: { amount: string; currency: string; currencyCode: string };
  };
}

interface leg {
  duration: number;
  segments: Array<{
    arrivalAirport: { uuid: string; caption: string };
    arrivalCity: { uuid: string; caption: string };
    arrivalDate: 'string';
    departureAirport: { uuid: string; caption: string };
    departureCity: { uuid: string; caption: string };
    departureDate: string;
    travelDuration: number;
  }>;
}

export const TicketsPageAux = () => {
  const [allFlights, setAllFlights] = useState<flights>(
    JSON.parse(JSON.stringify(flights))
  );

  const [numberOfFlightsVisible, setNumberOfFlightsVisible] =
    useState<number>(2);

  const [transfersStatus, setTransfersStatus] = useState('');

  const [sortType, setSortType] = useState('');

  const [fromCost, setFromCost] = useState('0');
  const [toCost, setToCost] = useState('10000');

  return (
    <div>
      <TicketsPage
        setNumberOfFlightsVisible={setNumberOfFlightsVisible}
        setTransfersStatus={setTransfersStatus}
        setToCost={setToCost}
        setFromCost={setFromCost}
        setSortType={setSortType}
        numberOfFlightsVisible={numberOfFlightsVisible}
        transfersStatus={transfersStatus}
        sortType={sortType}
        fromCost={fromCost}
        toCost={toCost}
      />
    </div>
  );
};
