import React from 'react';
import Banner from './Banner/Banner';
import ShowInstructor from '../ShowInstructor/ShowInstructor';
import PopularClasses from '../PopularClasses/PopularClasses';
import Extra from '../Extra/Extra';
import Introductions from '../Introductions/Introductions';
import Spend from '../Spend/Spend';
import SubBanner from '../SubBanner/SubBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introductions></Introductions>
            <PopularClasses></PopularClasses>
            <Spend></Spend>
            <Extra></Extra>
            <SubBanner></SubBanner>
            <ShowInstructor></ShowInstructor>
        </div>
    );
};

export default Home;