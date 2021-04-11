import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children, row, col, justify }) => {
  let style;
  if (row) {
    style = styles.flexRow;
  }
  if (col) {
    style = styles.flexCol;
  }

  if (justify) {
    style = StyleSheet.flatten([style, { justifyContent: justify }]);
  }

  return <View style={style}>{children}</View>;
};

const styles = StyleSheet.create({
  flexRow: { flexDirection: 'row', alignItems: 'center' },
  flexCol: { flexDirection: 'column', alignItems: 'center' },
});

export default Spacer;
