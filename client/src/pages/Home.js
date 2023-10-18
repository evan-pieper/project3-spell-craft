import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <h1>Here is the homepage!</h1>
      </div>
    );
};

const Home = () => {
    const { data } = useQuery(QUERY_CARDS);
    const cards = data?.cards || [];
    console.log(cards);
    const { data: userData } = useQuery(QUERY_ME);
    const user = userData?.me || {};
    console.log(user);

    return (
        <main>

        </main>
    );
};






export default Home;