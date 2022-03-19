import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import {basicApiCall} from '../../api';
import {screenDimension} from '../../util';

const Home = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    retriveUserData();
  }, []);

  const retriveUserData = async () => {
    let data = await basicApiCall();
    setTableData(data);
  };

  console.log('tableData =>', tableData);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Text>Home Screen</Text>
      <FlatList
        data={tableData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
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
