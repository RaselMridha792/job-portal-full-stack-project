import React from 'react';
import Banner from '../../Components/Layouts/Banner';
import Jobs from '../homeComponents/Jobs';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <div className='my-40 max-w-screen-2xl mx-auto'>
            <Jobs></Jobs>
        </div>      
        </>
    );
};

export default Home;