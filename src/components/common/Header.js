import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#07429b',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    borderWidth: 5,
    borderColor: '#e00d0d',
    borderRadius: 5

  },
  textStyle: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '700'
  }
};


export { Header };
