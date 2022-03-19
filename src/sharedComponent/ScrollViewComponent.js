import React from 'react';
import {ScrollView} from 'react-native';
import {screenDimension} from '../util';

const ScrollViewComponent = props => {
  return (
    <ScrollView
      style={{
        width: screenDimension.width,
        flex: 1,
        height: screenDimension.height,
      }}
      {...props}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ScrollViewComponent;
