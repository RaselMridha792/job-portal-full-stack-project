import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const Jobs = () => {
    const [job, setJOb] = useState([]);
    useEffect(()=>{
        const loadData = async() =>{
            const response = await fetch('http://localhost:5000/jobs');
            const data = await response.json();
            setJOb(data);
        }
        loadData();
    },[])
    return (
        <>
        <div>
            <h1 className='text-4xl font-bold'>latest jobs for you</h1>
            <div className='my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {job.map(singleJob => <JobCard key={singleJob._id} singleJob={singleJob}></JobCard>)}
            </div>
        </div> 
        </>
    );
};

export default Jobs;