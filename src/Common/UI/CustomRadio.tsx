import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface ICustomRadio {
  head: string;
  handleChange: (e: string) => void;
  options: Array<{ label: string; value: string }>;
}

export const CustomRadio: React.FC<ICustomRadio> = ({
  handleChange,
  head,
  options,
}) => {
  const [value, setValue] = React.useState('');

  const handleChangeLocal = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <FormLabel id='demo-controlled-radio-buttons-group'>{head}</FormLabel>
      <RadioGroup
        aria-labelledby='demo-controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
        value={value}
        onChange={(e) => {
          handleChangeLocal(e);
          handleChange((e.target as HTMLInputElement).value);
        }}
      >
        {options.map((option) => {
          return (
            <FormControlLabel
              key={option.label + Math.random()}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
