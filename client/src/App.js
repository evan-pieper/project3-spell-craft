// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import CardManagement from './components/CardManagement'; // Imports Card Management

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/card-management' component={CardManagement} /> {/* Add this route */}
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    );
}
handleImageChange = (event) => {
    const image = event.target.files[0];
    this.setState((prevState) => ({
        newCard: { ...prevState.newCard, image },
    }));
}


export default App;
