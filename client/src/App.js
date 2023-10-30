import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';

import { AuthProvider } from './components/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Navbar from './components/Navbar';

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
            <AuthProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />

                        <Route path='/login' element={<Login />} />

                        <Route path='/signup' element={<Signup />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </ApolloProvider>
    );
}

export default App;