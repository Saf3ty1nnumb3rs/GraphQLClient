import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HashRouter } from 'react-router-dom';
 
import App from 'Components/App';
 
import './style/style.css';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});
 
ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

