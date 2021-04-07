import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children, x, y, amount }) => {
  amount = amount || 15;
  let style = styles(amount).spacer;
  if (x) {
    style = styles(amount).spacerX;
  }
  if (y) {
    style = styles(amount).spacerY;
  }
  return <View style={style}>{children}</View>;
};

const styles = StyleSheet.create((amount) => {
  return {
    spacer: {
      margin: amount,
    },
    spacerX: {
      marginTop: 0,
      marginBottom: 0,
      marginLeft: amount,
      marginRight: amount,
    },
    spacerY: {
      marginTop: amount,
      marginBottom: amount,
      marginLeft: 0,
      marginRight: 0,
    },
  };
});

export default Spacer;
