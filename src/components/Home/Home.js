import React, { useEffect, useState } from 'react';
import Exercises from '../ExercisesDetails/Exercises';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import './Home.css'

const Home = () => {
    const [exercises, setExercises]=useState([])
    const [time, setTime] = useState('')
    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])

    const addToList = (props) =>{
        const newTime = [...time, props]
        setTime(newTime)
    }

    return (
        <div className='flex-none md:flex'>
            <div className='md:w-3/4'>
                <Exercises exercises={exercises} addToList={addToList}></Exercises>
            </div>
            <div className='md:w-1/4'>
                <PersonalDetails time={time}></PersonalDetails>
            </div>
        </div>
    );
};

export default Home;