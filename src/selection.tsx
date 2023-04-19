import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Selection = () => {
  return (
    <View style={styles.selectionWrapper}>
      <View style={styles.selection}>
        <Image source={require('./images/image_1.png')} style={styles.group} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectionWrapper: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  selection: {
    height: 1600,
    width: 803,
  },
  group: {
    height: 71,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 375,
  },
});

export default Selection;
