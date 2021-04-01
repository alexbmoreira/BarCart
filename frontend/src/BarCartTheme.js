import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#82577C',
    accent: '#AB4F9F',
    surface: '#B58FB0',
    backgroud: '#F2EBF2',
    text: '#453943',
  },
};

export default {
  theme,
};
