import React from 'react';
import picture1 from "../../images/about-1.jpg"

const Introductions = () => {
    return (
        <div className='flex mt-10 ml-16 bg-gray-100'>
            <div>
            <img style={{height:"350px"}} src={picture1} alt="" />
            </div>
            <div className='ml-16'>
                <h3 className='text-green-600 text-4xl'>Our Introductions</h3>
                <h1 style={{color: "#3b251a"}} className='font-bold text-6xl mt-3 mb-3'>Welcome to Camp <br /> of Summers</h1>
                <p className='text-gray-400 font-bold'>Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur.</p>
                <button style={{backgroundColor:"#ff6f29",height:"50px",width:"160px",color:"white"}} className='mt-3 hover:bg-sky-700 uppercase'>Discover More</button>
            </div>
        </div>
    );
};

export default Introductions;