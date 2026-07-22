import Label from '.';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'soft'],
    },
  },
  args: {
    children: 'Başvuru alındı',
    color: 'success',
    variant: 'soft',
  },
};

export default meta;

export const Default = {};

export const Warning = {
  args: {
    children: 'İnceleniyor',
    color: 'warning',
  },
};
