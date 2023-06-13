import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [popularClass, setPopularClass] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/popularClasses')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPopularClass(data)
            })
    }, [])
    return (
        
        <div className='grid lg:grid-cols-3 gap-4 mt-4'>
            {popularClass.map(popular=>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64 w-full' src={popular.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{popular.name}</h2>
                
            </div>
        </div>
                )}
            
        </div>
    );
};

export default PopularClasses;