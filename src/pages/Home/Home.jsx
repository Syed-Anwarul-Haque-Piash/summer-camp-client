import React from 'react';
import Banner from './Banner/Banner';
import ShowInstructor from '../ShowInstructor/ShowInstructor';
import PopularClasses from '../PopularClasses/PopularClasses';
import Extra from '../Extra/Extra';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Extra></Extra>
            <ShowInstructor></ShowInstructor>
        </div>
    );
};

export default Home;