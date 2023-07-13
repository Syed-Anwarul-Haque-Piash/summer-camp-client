import React from 'react';

const SubBanner = () => {
    return (
        <div style={{ backgroundColor: "#3b251a" }} className='mx-auto w-10/12 p-8' >
            <div className='grid grid-cols-3 gap-4'>
                <div className='ml-4'>
                    <h3 className='text-yellow-200'>Get Ready For The</h3>
                    <h1 className='text-white font-bold text-4xl'>Summer of a Lifetime</h1>
                </div>
                <div>
                    <p className='text-white text-center'>There are not many of lorem ipsum <br />
                        available alteration.</p>
                </div>
                <div>
                    <h3 className='text-white'>Call Anytime</h3>
                    <h1 className='text-white text-4xl'>+8801718271193</h1>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;