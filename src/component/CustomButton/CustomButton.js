import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CustomButton = props => {
  const {title} = props;
  const active = title === 'Message' ? false : true;
  return (
    <TouchableOpacity
      style={active ? styles.buttonStyle : styles.normalButtonStyle}>
      <Text style={active ? styles.textStyle : styles.normalTextStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
