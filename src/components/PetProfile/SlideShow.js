import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import './SlideShow.css'

const SlideShow = props => {
    const images = props.imgs.map(obj => obj['imgData']);
    // const images = props.imgs;

    const slides = images.map((slide, idx) => {
        return (
            <Carousel.Item key={`slide-${idx+1}`}>
                <div className='d-flex justify-content-center'>
                <img
                    className='carousel-pic'
                    src={slide}
                    alt={`slide-${idx+1}`}
                />
                </div>
            </Carousel.Item>
        )
    })
    
    return (
        <React.Fragment>
            <Carousel 
                className='pic-slides bg-dark'
            >
                {slides}
            </Carousel>

      </React.Fragment>
    )
}
  
export default SlideShow;