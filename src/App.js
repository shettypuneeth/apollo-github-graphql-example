import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink, concat } from 'apollo-link';

import './App.css';
import Root from './Root';

// ADD you app token
// https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
const TOKEN = '';

const httpLink = createHttpLink({uri: 'https://api.github.com/graphql'});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${TOKEN}`
    } 
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
         <Root />
       </ApolloProvider>
    );
  }
}

export default App;
