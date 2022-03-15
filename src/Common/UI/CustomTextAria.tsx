import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface ICustomTextAria {
  fromInputHandler: (e: string) => void;
  toInputHandler: (e: string) => void;
  defaultFromValue: string;
  defaultToValue: string;
  fromLabel: string;
  toLabel: string;
}

export const CustomTextAria: React.FC<ICustomTextAria> = ({
  fromInputHandler,
  toInputHandler,
  defaultFromValue,
  defaultToValue,
  fromLabel,
  toLabel,
}) => {
  const [from, setFrom] = React.useState(defaultFromValue);
  const [to, setTo] = React.useState(defaultToValue);

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        type='number'
        id={fromLabel}
        label={fromLabel}
        value={from}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFrom(event.target.value);
          fromInputHandler(event.target.value);
        }}
      />
      <TextField
        type='number'
        value={to}
        id={toLabel}
        label={toLabel}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTo(event.target.value);
          toInputHandler(event.target.value);
        }}
      />
    </Box>
  );
};
