import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, item, theme) {
  return {
    fontWeight:
    item.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({data}) {
  const theme = useTheme();
  const [item, setItem] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItem(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <div>
      <FormControl sx={{ m: 1, width: '100%' }}>        
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={item}
          onChange={handleChange}          
          MenuProps={MenuProps}
        >
          {data?.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, item, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
