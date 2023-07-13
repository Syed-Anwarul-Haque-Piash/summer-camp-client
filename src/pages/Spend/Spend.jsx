import React from 'react';
import choose1 from "../../images/chooseus-1.jpg"
import choose2 from "../../images/chooseus-2.jpg"

const Spend = () => {
    return (
        <div className='grid grid-cols-3 gap-4 ml-4 mt-24'>
            <div>
                <img src={choose1} alt="" />
            </div>
            <div>
                <img src={choose2} alt="" />
            </div>
            <div style={{backgroundColor:"#ff6f29"}}>
               <h1 className='text-4xl text-center text-white mt-4'>Spend a Happy br Weekend</h1>
               <p className='text-2xl text-center text-white mt-4'>Aliq is notm hendr erit a augue <br /> insu image pellen tes. Lorem  <br /> ipsum dolor sit amet.</p>
               <button style={{backgroundColor:"#ffbf37"}} className='mt-3 mx-auto'>Register Now</button>
            </div>
        </div>
    );
};

export default Spend;