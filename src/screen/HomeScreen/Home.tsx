import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, View, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {basicApiCall} from '../../api';
import {screenDimension} from '../../util';
import Back from '../../assets/profiles/CoverPhoto.png';
import CardComponet from './CardComponet';
import {ReduxState} from '../../redux/store/type';

const Home = () => {
  const language = useSelector(
    (state: ReduxState) => state.appconfigLanguageReducer.language,
  );
  const theme = useSelector(
    (state: ReduxState) => state.appconfigLanguageReducer.theme,
  );
  const [tableData, setTableData] = useState<any>([]);

  useEffect(() => {
    retriveUserData();
  }, []);

  const retriveUserData = async () => {
    const data = await basicApiCall();
    setTableData(data);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.HOME_SCREEN.backgroundColor,
      }}>
      <Image source={Back} />
      <FlatList
        data={tableData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: any) => (
          <View
            key={item.id}
            style={{
              width: screenDimension.width,
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <CardComponet apiData={item} language={language} theme={theme} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
