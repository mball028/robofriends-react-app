import React from 'react';
import './card.css'


const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-red dib br3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}200x200?set=set3`} alt='robots'/>
            <div>
                <h2 className='code'>{name}</h2>
                <p className='code'>{email}</p>
            </div>
        </div>
    )
}


export default Card;