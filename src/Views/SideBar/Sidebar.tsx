import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { CustomRadio } from '../../Common/UI/CustomRadio';
import { CustomTextAria } from '../../Common/UI/CustomTextAria';

const drawerWidth = 240;

interface ISideBar {
  setNumberOfFlightsVisible: React.Dispatch<React.SetStateAction<number>>;
  setTransfersStatus: React.Dispatch<React.SetStateAction<string>>;
  setToCost: React.Dispatch<React.SetStateAction<string>>;
  setFromCost: React.Dispatch<React.SetStateAction<string>>;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
}

export const SideBar: React.FC<ISideBar> = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <Toolbar />
      <Divider />

      <CustomRadio
        handleChange={(value) => {
          console.log(value);
        }}
        options={[
          { value: 'upCost', label: 'По возрастанию цены' },
          { value: 'downCost', label: 'По убыванию цены' },
          { value: 'timeInTravel', label: 'По времени в пути' },
        ]}
        head={'Сортировать'}
      />
      <Divider />
      <CustomRadio
        handleChange={(value) => {
          console.log(value);
        }}
        options={[
          { value: 'withoutTransfers', label: 'Без пересадок' },
          { value: 'withTransfer', label: 'С 1 пересадкой' },
        ]}
        head={'Фильтровать'}
      />
      <Divider />
      <CustomTextAria
        fromInputHandler={(value) => {
          console.log(value);
        }}
        toInputHandler={(value) => {
          console.log(value);
        }}
        defaultFromValue={'0'}
        defaultToValue={'100000'}
        fromLabel={'От'}
        toLabel={'До'}
      />
    </Drawer>
  );
};
