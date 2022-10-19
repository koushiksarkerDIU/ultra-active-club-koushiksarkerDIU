import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises]=useState([])
    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])
    return (
        <div className='exercises-container'>
            <h1 className='text-4xl font-semibold'> Muscle & Fitness Club</h1>
            <h6>Are you ready to  start today's workout???</h6>
            <div className='exercise-container mt-6 gap-6'>
            {
                exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
            }
            </div>
        </div>
    );
};

export default Exercises;