import React, { useEffect, useState } from 'react';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises]=useState([])
    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className='exercises-container'>
            <h1 className='text-4xl font-semibold'> Muscle & Fitness Club</h1>
            <h6>Are you ready to  start today's workout???</h6>
            {

            }
        </div>
    );
};

export default Exercises;