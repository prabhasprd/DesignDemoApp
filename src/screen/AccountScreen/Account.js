import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS} from '../../util/colors';
import {screenDimension, moderateScale} from '../../util';
import ScrollViewComponent from '../../sharedComponent/ScrollViewComponent';
import Profile from '../../assets/profiles/demo.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import {updateUserDatails} from '../../redux/action';

const Account = () => {
  const userDataArray = useSelector(state => state.userReducer);

  const userData = userDataArray.filter(
    item => item.name === 'Prabhas Ranjan Das',
  );
  const [isEdit, setIsEdit] = useState(true);
  const [name, setName] = useState(userData[0]?.name || 'john wick');
  const [phone, setPhone] = useState(userData[0]?.phone || '8080808080');
  const [email, setEmail] = useState(
    userData[0]?.email || 'john.wick@syndicate.com',
  );
  const [password, setPassword] = useState(
    userData[0]?.password || '123456789',
  );
  const [country, setCountry] = useState(userData[0]?.country || 'US');

  const dispatch = useDispatch();

  console.log('userData ==>', userData);

  const onClickSave = boolean => {
    console.log('boolean', boolean);
    Keyboard.dismiss();
    setIsEdit(boolean);
    if (boolean) {
      const userDetails = {
        name,
        phone,
        email,
        password,
        country,
      };
      console.log('save');
      dispatch(updateUserDatails(userDetails));
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.ACCOUNT_UI.backgroundColor,
        height: screenDimension.height,
      }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollViewComponent>
          <SafeAreaView
            style={{
              marginBottom: moderateScale(10),
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingVertical: moderateScale(20),
                alignItems: 'center',
              }}>
              <Image
                source={Profile}
                style={{
                  height: screenDimension.width / 3,
                  width: screenDimension.width / 3,
                  borderRadius: screenDimension.width / 2,
                }}
              />
              <Text
                style={{
                  fontFamily: 'Philosopher-Regular',
                  fontSize: 23,
                }}>{`Prabhas Ranjan Das`}</Text>
              <Text
                style={{
                  fontFamily: 'Philosopher-Regular',
                  fontSize: 15,
                }}>{`Bangalore, INDIA`}</Text>
            </View>
            <View style={{position: 'absolute', right: 30}}>
              <TouchableOpacity onPress={() => onClickSave(!isEdit)}>
                <Icon
                  name={isEdit ? 'account-edit' : 'content-save'}
                  size={30}
                  color={'#9c27b0'}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: screenDimension.width - 30,
                alignItems: 'center',
                borderBottomWidth: 1,
                paddingVertical: 20,
                borderColor: '#c0c0c0',
              }}>
              <Icon name="account-circle" size={30} color={'#9c27b0'} />
              <TextInput
                style={{
                  height: 40,
                  paddingLeft: moderateScale(20),
                  fontSize: moderateScale(18),
                  fontFamily: 'Philosopher-Regular',
                  color: isEdit ? '#9a73ef' : '#000000',
                }}
                editable={!isEdit}
                value={name}
                maxLength={30}
                placeholder="Enter your name"
                placeholderTextColor="#C0c0c0"
                onChangeText={text => setName(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: screenDimension.width - 30,
                alignItems: 'center',
                borderBottomWidth: 1,
                paddingVertical: 20,
                borderColor: '#c0c0c0',
              }}>
              <Icon name="cellphone" size={30} color={'#9c27b0'} />
              <TextInput
                style={{
                  height: 40,
                  paddingLeft: moderateScale(20),
                  fontSize: moderateScale(18),
                  fontFamily: 'Philosopher-Regular',
                  color: isEdit ? '#9a73ef' : '#000000',
                }}
                editable={!isEdit}
                maxLength={10}
                placeholder="Enter your phone number"
                placeholderTextColor="#C0c0c0"
                value={phone}
                onChangeText={text => setPhone(text)}
                keyboardType="number-pad"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: screenDimension.width - 30,
                alignItems: 'center',
                borderBottomWidth: 1,
                paddingVertical: 20,
                borderColor: '#c0c0c0',
              }}>
              <Icon name="email" size={30} color={'#9c27b0'} />
              <TextInput
                style={{
                  height: 40,
                  paddingLeft: moderateScale(20),
                  fontSize: moderateScale(18),
                  fontFamily: 'Philosopher-Regular',
                  color: isEdit ? '#9a73ef' : '#000000',
                }}
                maxLength={30}
                placeholder="Enter your e-mail"
                placeholderTextColor="#C0c0c0"
                editable={!isEdit}
                value={email}
                onChangeText={text => setEmail(text.toLowerCase())}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: screenDimension.width - 30,
                alignItems: 'center',
                borderBottomWidth: 1,
                paddingVertical: 20,
                borderColor: '#c0c0c0',
              }}>
              <Icon name="form-textbox-password" size={30} color={'#9c27b0'} />
              <TextInput
                style={{
                  height: 40,
                  paddingLeft: moderateScale(20),
                  fontSize: moderateScale(18),
                  fontFamily: 'Philosopher-Regular',
                  color: isEdit ? '#9a73ef' : '#000000',
                }}
                secureTextEntry={true}
                maxLength={20}
                placeholder="Enter your password"
                placeholderTextColor="#C0c0c0"
                editable={!isEdit}
                value={password}
                onChangeText={text => setPassword(text.toUpperCase)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: screenDimension.width - 30,
                alignItems: 'center',
                borderBottomWidth: 1,
                paddingVertical: 20,
                borderColor: '#c0c0c0',
              }}>
              <IconFontAwesome name="globe-asia" size={30} color={'#9c27b0'} />
              <TextInput
                editable={!isEdit}
                style={{
                  height: 40,
                  paddingLeft: moderateScale(20),
                  fontSize: moderateScale(18),
                  fontFamily: 'Philosopher-Regular',
                  color: isEdit ? '#9a73ef' : '#000000',
                }}
                maxLength={20}
                placeholder="Enter your country"
                placeholderTextColor="#C0c0c0"
                value={country}
                onChangeText={text => setCountry(text)}
              />
            </View>
          </SafeAreaView>
        </ScrollViewComponent>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Account;
