import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import AppWidgetSummary from '.';

const meta = {
  title: 'Dashboard/AppWidgetSummary',
  component: AppWidgetSummary,
  tags: ['autodocs'],
  args: {
    title: 'Toplam aday',
    total: 1280,
    icon: <PeopleAltIcon color="primary" sx={{ fontSize: 48 }} />,
  },
};

export default meta;

export const Default = {};

export const LargeTotal = {
  args: {
    title: 'Bu ayki başvurular',
    total: 18320,
  },
};
