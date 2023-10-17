import React from "react";
import { useQuery } from '@apollo/client';

import { QUERY_CARDS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
    const { data } = useQuery(QUERY_CARDS);
    const cards = data?.cards || [];
    console.log(cards);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const user = userData?.me || {};
    console.log(user);

    return (
        <main>

        </main>
    );
};






export default Home;