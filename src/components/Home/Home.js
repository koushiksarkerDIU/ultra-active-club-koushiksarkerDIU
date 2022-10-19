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
        <div className='main-container'>
            <Exercises exercises={exercises} addToList={addToList}></Exercises>
            <PersonalDetails time={time}></PersonalDetails>
        </div>
    );
};

export default Home;