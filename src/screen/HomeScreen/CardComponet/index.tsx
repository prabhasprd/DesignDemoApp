import {View, Text} from 'react-native';
import React from 'react';

const CardComponet = (props: any) => {
  const {apiData, language, theme} = props;
  const {name, username, phone, website} = apiData;

  return (
    <View style={{paddingLeft: 10, paddingRight: 10}}>
      <Text
        style={{
          textTransform: 'uppercase',
          color: theme.HOME_SCREEN.textColor,
        }}>
        {language.home.name} :- {name}
      </Text>
      <Text
        style={{
          textTransform: 'uppercase',
          color: theme.HOME_SCREEN.textColor,
        }}>
        {language.home.username} :- {username}
      </Text>
      <Text
        style={{
          textTransform: 'uppercase',
          color: theme.HOME_SCREEN.textColor,
        }}>
        {language.home.phone} :- {phone}
      </Text>
      <Text
        style={{
          textTransform: 'uppercase',
          color: theme.HOME_SCREEN.textColor,
        }}>
        {language.home.website} :- {website}
      </Text>
    </View>
  );
};

export default CardComponet;
