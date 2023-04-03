import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  screenDimension,
  verticalScale,
} from '../../util';
import {COLORS} from '../../util/colors';
import ScrollViewComponent from '../../sharedComponent/ScrollViewComponent';
import Header from '../../component/Header/Header';
import CustomButton from '../../component/CustomButton/CustomButton';
import PhotoGallary from '../../component/PhotoGallary/PhotoGallary';
import coverPhoto from '../../assets/profiles/CoverPhoto.png';
import Message from '../../assets/profiles/Message.png';
import Back from '../../assets/profiles/Back.png';
import styles from './styles';

const Setting = () => {
  const language = useSelector(
    state => state.appconfigLanguageReducer.language,
  );
  const {height, width} = screenDimension;
  let leftButton = {
    name: 'leftButton',
    image: Back,
    onPress: () => {},
  };

  let rightButton = {
    name: 'rightButton',
    image: Message,
    onPress: () => {},
  };
  let arrayData = ['a', 'b', 'c', 'd'];
  return (
    <ScrollViewComponent>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.generalColor.white,
          width,
          alignItems: 'center',
        }}>
        <ImageBackground
          source={coverPhoto}
          style={{
            width,
            backgroundColor: 'red',
            height: moderateVerticalScale(250),
          }}
          imageStyle={{
            width,
          }}>
          <Header leftButton={leftButton} rightButton={rightButton} />
        </ImageBackground>
        <Image
          source={coverPhoto}
          style={{
            height: moderateVerticalScale(120),
            width: moderateVerticalScale(120),
            borderRadius: moderateVerticalScale(120),
            marginTop: -moderateVerticalScale(120 / 2),
          }}
        />
        <View style={styles.followingStyle}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.followerValue}>43.5K</Text>
            <Text style={styles.followerText}>
              {language.setting.followers}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.followerValue}>537</Text>
            <Text style={styles.followerText}>
              {language.setting.following}
            </Text>
          </View>
        </View>
        <View style={styles.profileView}>
          <Text style={styles.profileName}>{`Sophie Maria`}</Text>
          <Text style={styles.profileStatus}>
            {`I love photography. It makes me \n feel one with nature`}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: moderateVerticalScale(15),
            width: width - moderateVerticalScale(80),
          }}>
          <CustomButton title={`Follow`} />
          <View style={{width: moderateVerticalScale(20)}} />
          <CustomButton title={`Message`} />
        </View>
        {/* <FlatList
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{}}>
              <PhotoGallary />
            </View>
          )}
          data={arrayData || []}
          onEndReachedThreshold={0.8}
          contentContainerStyle={{flex: 1, width, backgroundColor: 'red'}}
        /> */}
      </SafeAreaView>
    </ScrollViewComponent>
  );
};

export default Setting;
