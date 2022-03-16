import React, { useState } from 'react';
import { TicketsPage } from './TicketsPage';
import flights from '../../flights.json';

interface IFlights {
  result: {
    flights: Array<IFlightGeneral>;
  };
}

export interface IFlightGeneral {
  flightToken: string;
  flight: IFlight;
}

export interface IFlight {
  airlineAlliance: { uid: string; caption: 'string' };
  legs: Array<Leg>; // leg its array with 2 leg
  price: {
    total: { amount: string; currency: string; currencyCode: string };
  };
}

export interface Leg {
  duration: number;
  segments: Array<{
    arrivalAirport: { uid: string; caption: string };
    arrivalCity: { uid: string; caption: string };
    arrivalDate: 'string';
    departureAirport: { uid: string; caption: string };
    departureCity: { uid: string; caption: string };
    departureDate: string;
    travelDuration: number;
    airline: { uid: string; caption: string; airlineCode: string };
  }>;
}

export const TicketsPageAux = () => {
  const [allFlights, setAllFlights] = useState<IFlights>(
    JSON.parse(JSON.stringify(flights))
  );

  const [numberOfFlightsVisible, setNumberOfFlightsVisible] =
    useState<number>(2);

  const [transfersStatus, setTransfersStatus] = useState('');

  const [sortType, setSortType] = useState('');

  const [fromCost, setFromCost] = useState('0');
  const [toCost, setToCost] = useState('10000');

  function filterFlights(allFlights: IFlights): Array<IFlightGeneral> {
    let flightsToView = [...allFlights.result.flights].slice(
      0,
      numberOfFlightsVisible
    );

    if (transfersStatus !== '') {
      // if transfer status setted
      if (transfersStatus === 'withTransfer') {
        flightsToView = flightsToView.filter((flight) => {
          return (
            flight.flight.legs[0].segments.length === 2 &&
            flight.flight.legs[1].segments.length === 2
          );
        });
      }
      if (transfersStatus === 'withoutTransfers') {
        flightsToView = flightsToView.filter((flight) => {
          return (
            flight.flight.legs[0].segments.length === 1 &&
            flight.flight.legs[1].segments.length === 1
          );
        });
      }
    }

    flightsToView = flightsToView.filter((flight) => {
      return (
        Number(flight.flight.price.total.amount) <= Number(toCost) &&
        Number(flight.flight.price.total.amount) >= Number(fromCost)
      );
    });

    if (sortType !== '') {
      if (sortType === 'upCost') {
        flightsToView.sort((a, b) => {
          return (
            Number(a.flight.price.total.amount) -
            Number(b.flight.price.total.amount)
          );
        });
      }
      if (sortType === 'downCost') {
        flightsToView.sort((a, b) => {
          return (
            Number(b.flight.price.total.amount) -
            Number(a.flight.price.total.amount)
          );
        });
      }
      if (sortType === 'timeInTravel') {
        flightsToView.sort((a, b) => {
          return (
            Number(a.flight.legs[0].duration + a.flight.legs[1].duration) -
            Number(b.flight.legs[0].duration + b.flight.legs[1].duration)
          );
        });
      }
    }

    return flightsToView;
  }

  return (
    <div>
      <TicketsPage
        setNumberOfFlightsVisible={setNumberOfFlightsVisible}
        setTransfersStatus={setTransfersStatus}
        setToCost={setToCost}
        setFromCost={setFromCost}
        setSortType={setSortType}
        numberOfFlightsVisible={numberOfFlightsVisible}
        flightToView={filterFlights(allFlights)}
      />
    </div>
  );
};
