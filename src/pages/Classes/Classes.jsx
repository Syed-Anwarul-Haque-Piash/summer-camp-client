import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/approvedClasses?status=${"approved"}`)
          .then((res) => res.json())
          .then((data) => {
            
            setClasses(data);
          });
      }, []);
      console.log(classes)
      const addClasses=() => {
        
      } 
    return (
        <div>
            <div className='grid lg:grid-cols-3 mt-4'>
            {classes.map(cl=>
                <div key={cl._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={cl.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{cl.name}</h2>
                  <p>{cl.instructor}</p>
                  <p>{cl.price}</p>
                  <p>{cl.available}</p>
                  <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Read More</button> */}
                   
                      <button onClick={()=>addClasses(cl)} className="btn btn-neutral">Add To Cart</button>
                    
                  </div>
                </div>
              </div>
            
              )}
              
            </div>
        </div>
        // <div>
        //     {classes.map(course=>  <Course key={course._id} course={course}></Course>)}
        // </div>
    );
};

export default Classes;