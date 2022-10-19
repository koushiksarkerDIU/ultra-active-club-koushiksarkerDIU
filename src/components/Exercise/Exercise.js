import React from 'react';

const Exercise = ({exercise}) => {
    console.log(exercise)
    const {Title , Details, img, Time}= exercise
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Title}</h2>
                    <p>{Details ? Details.slice(0,200) + '... see more': Details } </p>
                    <p>Time required: {Time} Sec</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;