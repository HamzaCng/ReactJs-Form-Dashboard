import * as React from 'react';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material';
import HeadCard from './HeadCard';
import Charts from './Charts';
import UserList from './UserList';

const Index = () => {
  const defaultTheme = createTheme();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HeadCard />
        <Charts />
        <UserList />        
      </ThemeProvider>
    </>
  )
}

export default Index