import React from 'react';
import { CustomButton } from '../../Common/UI/CustomButton';

export const TicketsPageAux = () => {
  return (
    <div>
      TicketsPageAux
      <CustomButton
        text='customButton'
        variant='outlined'
        onClick={() => {
          console.log('click');
          console.log(Number.isFinite('0'));
        }}
      />
    </div>
  );
};
