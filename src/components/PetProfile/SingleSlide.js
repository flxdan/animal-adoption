import React from 'react';

import './SingleSlide.css'

const SingleSlide = props => {
    return (
        <div className='d-flex justify-content-center'>
            <img
                className='singleslide'
                src={props.picFiles[0]}
                alt='slide-1'
            />
        </div>   
    )
}
  
export default SingleSlide;