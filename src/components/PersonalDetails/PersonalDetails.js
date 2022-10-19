import React from 'react';

const PersonalDetails = () => {
    return (
        <div className='container'>
            <div className='flex'>
                <img className="mask mask-squircle w-1/4" src="https://qph.cf2.quoracdn.net/main-qimg-835aa228a5d9afe1cd729701b37531ff-lq" />
                <div className='p-3 '>
                    <h1 className='text-3xl font-bold m-2'>Koushik Sarker</h1>
                    <p className='text-lg m-2'>Dhanmonddi, Dhaka</p>
                </div>
            </div>
            <div>
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div >
                            <strong className="stat-value">62</strong>
                            <strong className="stat-title">Kg</strong>
                        </div>
                        <div className="stat-desc">Weight</div>
                    </div>
                    <div className="stat">
                        <div >
                            <strong className="stat-value">5.6</strong>
                        </div>
                        <div className="stat-desc">Height</div>
                    </div>
                    <div className="stat">
                        <div >
                            <strong className="stat-value">25</strong>
                            <strong className="stat-title">yrs</strong>
                        </div>
                        <div className="stat-desc">Age</div>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <p className='font-semibold text-2xl'>
                    Add a break
                </p>
                <div className='mt-4'>
                    <button className=" m-2 btn btn-outline btn-circle" >20s</button>
                    <button className=" m-2 btn btn-outline btn-circle" >30s</button>
                    <button className=" m-2 btn btn-outline btn-circle" >40s</button>
                    <button className=" m-2 btn btn-outline btn-circle" >50s</button>
                    <button className=" m-2 btn btn-outline btn-circle" >60s</button>
                </div>
            </div>
            
            <div className='mt-8'>
                <h1 className='font-semibold text-2xl'>Workout Details</h1>
                <div className='bg-slate-400 w-3/4 p-2 rounded-xl mt-4'>
                    <h1 className='text-black font-semibold'>Workout Time </h1>
                </div>
                <div className='bg-slate-400 w-3/4 p-2 rounded-xl mt-4'>
                    <h1 className='text-black font-semibold'>Break Time </h1>
                </div>
            </div>
            <div className='mt-6 grid place-content-center w-3/4'>
                <button className="btn btn-info w-52 font-bold">Workout Completed</button>
            </div>






        </div>
    );
};

export default PersonalDetails;