import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
    });

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    {/*<Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>*/}
                    <Routes>
                        <Route path='/' element={Home} />
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    );
}

/*<div>
<Routes>
<Route exact path='/' component={Home} />
</Routes>
</div>
*/

export default App;