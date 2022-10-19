import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = (props) => {
    const {addToList, exercises} = props
    return (
        <div className='container mt-7'>
            <div className='mx-6'>
                <h1 className='text-4xl font-semibold'> Muscle & Fitness Club</h1>
                <h6>Are you ready to  start today's workout???</h6>
            </div>
            <div className='grid grid-col-1 md:grid-cols-3 mt-6 gap-6 mx-6'>
            {
                exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} addToList={addToList}></Exercise>)
            }
            </div>
        </div>
    );
};

export default Exercises;