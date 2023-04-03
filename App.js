import React from 'react';
import WrapperApp from './src/navigation/Wrapper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import store from './src/redux/store';
import Login from './src/screen/Login';

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WrapperApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
