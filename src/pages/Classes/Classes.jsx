import React, { useEffect, useState } from 'react';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClasses(data)
            })
    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-3 mt-4'>
            {classes.map(cl=>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={cl.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{cl.name}</h2>
                  <p>{cl.instructor}</p>
                  <p>{cl.price}</p>
                  <p>{cl.available}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)}
            </div>
        </div>
    );
};

export default Classes;