import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, View, Image} from 'react-native';
import {basicApiCall} from '../../api';
import {screenDimension} from '../../util';
import Back from '../../assets/profiles/CoverPhoto.png';

const Home = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    retriveUserData();
  }, []);

  const retriveUserData = async () => {
    let data = await basicApiCall();
    setTableData(data);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Image source={Back} />
      <FlatList
        data={tableData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: any) => (
          <View key={item.id} style={{width: screenDimension.width}}>
            <Text>NAME :- {item.name}</Text>
            <Text>USER NAME :- {item.username}</Text>
            <Text>PHONE :- {item.phone}</Text>
            <Text>WEBSITE :- {item.website}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
