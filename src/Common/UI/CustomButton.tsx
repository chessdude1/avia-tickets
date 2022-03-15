import React from 'react';
import Button from '@mui/material/Button';

interface ICustomButton {
  variant: 'contained' | 'outlined' | 'text';
  text: string;
  onClick: () => void;
}

export const CustomButton: React.FC<ICustomButton> = ({
  variant,
  text,
  onClick,
}) => {
  return (
    <div>
      <Button variant={variant} onClick={onClick}>
        {text}
      </Button>
    </div>
  );
};
