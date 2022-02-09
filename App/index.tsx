import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationRender from './Navigation';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationRender />
    </SafeAreaProvider>
  );
};
export default App;
