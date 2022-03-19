import {createStore} from 'redux';
import persistedReducer from '../reducer/index';

const store = createStore(persistedReducer);

export default store;
