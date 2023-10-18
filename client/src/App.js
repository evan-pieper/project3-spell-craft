import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';

import Home from './pages/Home';
import Login from './pages/Login';


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
    });

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />

                        <Route path='/login' element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;