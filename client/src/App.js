import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
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
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;