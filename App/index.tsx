import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import NavigationRender from './Navigation';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
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

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
