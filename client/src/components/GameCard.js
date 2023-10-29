import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ card }) => {
    return (
        <div className="card mb-3">
        <p className="card-header">
            {card.cardText}
        </p>
        <div className="card-body">
            <Link to={`/profile/${card.username}`} style={{ fontWeight: 700 }}>
            View {card.username}'s profile.
            </Link>
        </div>
        </div>
    );
};

export default GameCard;