'use client';

import { useState } from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

import { HASURA_SECRET, HASURA_URL } from '@/config-global';

// ----------------------------------------------------------------------

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const queryClient = (accessToken?: string | null) => {
    return new ApolloClient({
      link: new HttpLink({
        uri: HASURA_URL!,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'content-type': 'application/json',
          'x-hasura-admin-secret': HASURA_SECRET!,
        },
      }),
      cache: new InMemoryCache(),
    });
  };

  const [client] = useState(queryClient);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ReactQueryProvider;
