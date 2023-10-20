import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
//import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

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

                        <Route path='/signup' element={<Signup />} />
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