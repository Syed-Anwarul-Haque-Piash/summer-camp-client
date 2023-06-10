import React, { useEffect, useState } from 'react';
import InstructorCard from '../InstructorCard/InstructorCard';

const ShowInstructor = () => {
    const [instructor,setInstructor] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/instructor')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setInstructor(data)
        })
    },[])
    return (
        <div className='grid lg:grid-cols-3 gap-4 mt-5'>
            {instructor.map(instruct=><InstructorCard key={instruct._id} instruct={instruct}></InstructorCard>)}
        </div>
    );
};

export default ShowInstructor;