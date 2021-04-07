import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children, row, col }) => {
  let style;
  if (row) {
    style = styles.flexRow;
  }
  if (col) {
    style = styles.flexCol;
  }
  return <View style={style}>{children}</View>;
};

const styles = StyleSheet.create({
  flexRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  flexCol: { flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' },
});

export default Spacer;
