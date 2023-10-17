import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';

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
                    {/*<Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>*/}
                    <Routes>
                        <Route path='/' element={<Home />} />
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