import {RootNavigation} from './src/navigation/RootNavigation';
import {clientPersister} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {GluestackUIProvider} from '@/components/ui/gluestack-ui-provider';
import React from 'react';
import {queryClient} from '@/utils/queryClient';
import './global.css';
import {LogBox} from 'react-native';

if (__DEV__) {
  LogBox.ignoreLogs([
    'getHost: "Invalid non-string URL" for scriptURL - Falling back to localhost',
  ]);
}

function App(): React.JSX.Element {
  return (
    <PersistQueryClientProvider
      persistOptions={{persister: clientPersister}}
      client={queryClient}>
      <GluestackUIProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </GluestackUIProvider>
    </PersistQueryClientProvider>
  );
}

export default App;
