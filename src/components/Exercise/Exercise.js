import React from 'react';

const Exercise = (props) => {
    const {exercise , addToList} = props;
    const {Title , Details, img, Time}= exercise
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-64' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Title}</h2>
                    <p>{Details ? Details.slice(0,200) + '... see more': Details } </p>
                    <p>Time required: {Time} Sec</p>
                <div className="card-actions justify-center my-3">
                    <button onClick={()=> addToList(Time)} className="btn btn-info w-52 font-bold">Add to list</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;