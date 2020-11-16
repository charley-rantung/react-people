import React from 'react';
//props adalah sebuah object

// const Card = (props) => {
const Card = ({name, institution, address, phoneNumber}) => {
    // const {name, institution, address, phoneNumber} = props; proses destructuring
    return (
        <div className='card-container'>
        {/* <p>{props.name}</p>
            <p>{props.institution} </p>
            <p>{props.address}</p>
            <p>{props.phoneNumber}</p> */}
            <p>{name}</p>
            <p>{institution} </p>
            <p>{address}</p>
            <p>{phoneNumber}</p>
        </div>
    )
}

export default Card;