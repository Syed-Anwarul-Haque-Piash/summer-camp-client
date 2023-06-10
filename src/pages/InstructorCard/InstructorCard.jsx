import React from 'react';

const InstructorCard = ({ instruct }) => {
    const {name,image,email,number}=instruct;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ms-2">
            <figure><img className='w-full h-56' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p>Number of Classes: {number}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;