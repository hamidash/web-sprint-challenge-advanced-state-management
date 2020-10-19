import React from 'react';

function Smurf(props){
    return (
        <div className='smurf' key='smurf.id'>
            <h2>Name: {props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height}</h3>
        </div>
    )
}

export default Smurf;