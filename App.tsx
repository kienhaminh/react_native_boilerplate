import {RootNavigation} from '@/navigation/RootNavigation';
import {clientPersister} from '@/store';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient} from '@tanstack/react-query';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import React from 'react';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <PersistQueryClientProvider
      persistOptions={{persister: clientPersister}}
      client={queryClient}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </PersistQueryClientProvider>
  );
}

export default App;
