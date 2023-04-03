import {combineReducers} from 'redux';
import {userReducer} from './mainReducer';
import {appconfigLanguageReducer} from './systemconfigure';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  debug: true,
  storage: AsyncStorage,
  whitelist: ['userReducer'],
};

const rootReducer = combineReducers({
  userReducer,
  appconfigLanguageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
