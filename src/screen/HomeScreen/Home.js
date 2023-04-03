import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {basicApiCall} from '../../api';
import {screenDimension} from '../../util';
import Back from '../../assets/profiles/CoverPhoto.png';
// import auth from '@react-native-firebase/auth';

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

  const changesMade = async () => {
    // const data = await RNFS.readFileAssets('CoverPhoto.png', 'base64');
    // console.log(
    //   'stlUri == dataa ==>>sdfgsdfsgjkdf',
    //   `data:image/png;base64,` + data,
    // );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Text>Home Screen</Text>
      {/* <TouchableOpacity onPress={changesMade}>
        <Text>Button</Text>
      </TouchableOpacity> */}
      <Image source={Back} />
      {/* <FlatList
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
      /> */}
    </SafeAreaView>
  );
};

export default Home;
