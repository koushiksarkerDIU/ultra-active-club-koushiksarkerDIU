import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = (props) => {
    const {addToList, exercises} = props
    return (
        <div className='exercises-container'>
            <h1 className='text-4xl font-semibold'> Muscle & Fitness Club</h1>
            <h6>Are you ready to  start today's workout???</h6>
            <div className='exercise-container mt-6 gap-6'>
            {
                exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} addToList={addToList}></Exercise>)
            }
            </div>
        </div>
    );
};

export default Exercises;