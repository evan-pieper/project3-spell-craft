import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import { Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const httpLink = createHttpLink({
    uri: '/graphql',
  });

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    });

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <div className = 'nav' id = 'nav'>
                        <Link to = '/'>Home</Link>
                        <Link to = '/login'>Login</Link>
                        <Link to = '/signup'>Signup</Link>
                    </div>
                    <Routes>
                        <Route path='/' element={<Home />} />

                        <Route path='/login' element={<Login />} />

                        <Route path='/signup' element={<Signup />} />
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;