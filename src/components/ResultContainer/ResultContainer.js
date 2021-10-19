import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const ResultContainer = ({ suggestedNames }) => {

    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });

    return (
        <div className="results-container">
            <p className="results-container1">{suggestNameJsx}</p>
        </div>
    );

};

export default ResultContainer;