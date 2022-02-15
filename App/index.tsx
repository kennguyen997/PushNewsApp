import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import NavigationRender from './Navigation';
import {LogBox} from 'react-native';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationRender />
    </SafeAreaProvider>
  );
};
export default App;

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
