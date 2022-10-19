import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = (props) => {
    const {addToList, exercises} = props
    return (
        <div className='container mt-7'>
            <div className='mx-6'>
                <h1 className='text-4xl font-semibold'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Muscle & Fitness Club</h1>
                <h6 className='mt-3'><strong className='text-red-600 text-2xl'>Are you ready</strong> to  start today's workout???</h6>
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