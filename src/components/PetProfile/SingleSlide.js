import React from 'react';

import './SingleSlide.css'

const SingleSlide = props => {
    return (
        <div className='d-flex justify-content-center'>
            <img
                className='singleslide'
                src={props.imgs[0]['imgData']}
                alt='slide-1'
            />
        </div>   
    )
}
  
export default SingleSlide;