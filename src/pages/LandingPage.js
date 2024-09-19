import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import i18n from '../i18n';
import LocalContex from '../LocaleContex';
import UserInfo from './UserInfo';
import EducationInfo from './EducationInformation';
import ComputerCouserses from './ComputerCouserses';
import JobExperience from './JobExperience';
import StickyDrawer from '../components/StickyDrawer';
import Referance from './Reference';
import Interesting from './Interesting';
import OtherInfo from './OtherInfo';

import { useMediaQuery } from '@mui/material';

export default function LandingPage() {
  const [locale, setLocale] = React.useState(i18n.language);
  const defaultTheme = createTheme();
  const matches = useMediaQuery('(max-width:576px)');


  return (
    <LocalContex.Provider value={{ locale, setLocale }}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />      
        <Box sx={{ bgcolor: 'background.default' }}>
          <UserInfo />
          <Divider />
          <EducationInfo />
          <Divider />
          <ComputerCouserses />
          <Divider />
          <JobExperience />
          <Divider />
          <Referance />
          <Divider />
          <Interesting />
          <Divider />
          <OtherInfo />
          <Divider />
        </Box>
        {!matches && <StickyDrawer />}
      </ThemeProvider>
    </LocalContex.Provider>

  );
}
