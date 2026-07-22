import ThemeProvider from '../src/dashboard/theme';

const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export default preview;
