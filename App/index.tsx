import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import NavigationRender from './Navigation';
import store from './Redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationRender />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
