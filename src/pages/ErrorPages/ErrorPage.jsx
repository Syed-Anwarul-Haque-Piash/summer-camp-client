import React from 'react';
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const { error, status } = useRouteError();
    console.log(status)
    
    return (
        <div className='flex items-center h-screen  bg-white text-[#757575]'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto'>
                <div className="w-80">
                    <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" />
                </div>
                <div className='max-w-md text-center mt-5'>
                    <h2 className='mb-5 font-extrabold text-9xl text-red-500'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-14'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn btn-error rounded-lg p-4 mt-10'>Back To Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;