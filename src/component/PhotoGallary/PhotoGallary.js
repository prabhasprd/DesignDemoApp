import React from 'react';
import {SafeAreaView, Text, View, ImageBackground, Image} from 'react-native';
import coverPhoto from '../../assets/profiles/CoverPhoto.png';
import {screenDimension} from '../../util';

const PhotoGallary = () => {
  const {width} = screenDimension;
  return (
    <SafeAreaView
      style={{
        width: width / 3,
        height: width / 3,
        borderRadius: 2,
      }}>
      <Image
        resizeMode={'contain'}
        source={coverPhoto}
        style={{
          borderRadius: 4,
        }}
      />
      {/* <ImageBackground
        source={coverPhoto}
        style={{
          width: width / 3.5,
          height: width / 3.5,
        }}
        imageStyle={{
          borderRadius: 5,
        }}
      /> */}
    </SafeAreaView>
  );
};

export default PhotoGallary;
