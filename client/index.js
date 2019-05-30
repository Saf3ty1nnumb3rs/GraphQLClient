import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HashRouter } from 'react-router-dom';
 
import App from './components/App';
 
const client = new ApolloClient({});
 
ReactDOM.render(
  <ApolloProvider client={client}>
    Hello
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

