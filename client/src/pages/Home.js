//import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CARDS, QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

const Home = () => {
    // const { data } = useQuery(QUERY_CARDS);
    // const cards = data?.cards || [];
    // console.log(cards);
    const { data: userData } = useQuery(QUERY_ME);
    const user = userData?.me || {};
    console.log(user);

    return (
        <main>
          <div className="flex-row justify-center">
            <div className="col-12 col-md-8 mb-3">
              {user.username ? (
                <div className="card mb-3">
                  <p className="card-header">
                    Welcome back, {user.username}!
                  </p>
                  <div className="card-body">
                    <Link to={`/profile/${user.username}`} style={{ fontWeight: 700 }}>
                      View {user.username}'s profile.
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="card mb-3">
                  <p className="card-header">Welcome to Flashcard Pro!</p>
                  <div className="card-body">
                    <Link to="/login">
                      Login
                    </Link>
                    <Link to="/signup">
                      Signup
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {user.cards?.length && user.cards.map(card=>(
              <div>
                <h4>{card.cardText}</h4>




              </div>
            ))}
          </div>
        </main>
    );
};






export default Home;