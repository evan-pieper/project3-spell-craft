import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';

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
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;