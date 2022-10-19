import React from 'react';
import Exercises from '../ExercisesDetails/Exercises';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import './Home.css'

const Home = () => {
    return (
        <div className='main-container'>
            <Exercises></Exercises>
            <PersonalDetails></PersonalDetails>
        </div>
    );
};

export default Home;