import React from 'react';
import Banner from './Banner/Banner';
import ShowInstructor from '../ShowInstructor/ShowInstructor';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <ShowInstructor></ShowInstructor>
        </div>
    );
};

export default Home;