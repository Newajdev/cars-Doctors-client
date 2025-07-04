import React from 'react';

const FacilityCard = ({facility}) => {
    const {name, details} = facility
    return (
        <div className="card bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default FacilityCard;