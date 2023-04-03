import {View, Text} from 'react-native';
import React from 'react';

const CardComponet = (props: any) => {
  const {apiData, language} = props;
  const {name, username, phone, website} = apiData;

  return (
    <View style={{paddingLeft: 10, paddingRight: 10}}>
      <Text style={{textTransform: 'uppercase'}}>
        {language.home.name} :- {name}
      </Text>
      <Text>
        {language.home.username} :- {username}
      </Text>
      <Text>
        {language.home.phone} :- {phone}
      </Text>
      <Text>
        {language.home.website} :- {website}
      </Text>
    </View>
  );
};

export default CardComponet;
