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
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  flexCol: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default Spacer;
