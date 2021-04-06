import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children, x, y }) => {
  let style = styles.spacer;
  if (x) {
    style = styles.spacerX;
  }
  if (y) {
    style = styles.spacerY;
  }
  return <View style={style}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
  spacerX: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
  },
  spacerY: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 0,
    marginRight: 0,
  },
});

export default Spacer;
