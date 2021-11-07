import Carousel from 'react-bootstrap/Carousel'

import './ProfileImage.css'

const SingleSlide = props => {
    return (
        <div className='image-container d-flex justify-content-center'>
            <img className='singleslide' src={props.img[0]['imgData']} alt='pet'/>
        </div>
    )
}

const makeCaroselItems = (images) => {
    const slides = images.map((slide, idx) => {
        return (
            <Carousel.Item key={`slide-${idx+1}`}>
                <div className='d-flex justify-content-center'>
                    <img className='carousel-image' src={slide} alt={`slide=${idx+1}`} />
                </div>
            </Carousel.Item>
        )
    })
    return slides
}

const ProfileImage = props => {
    const images = props.imgs.map(obj => obj['imgData']);
    
    switch(images.length > 1) {
        case true:
            return (
                <Carousel variant='dark' className='image-slides'>
                    {makeCaroselItems(images)}
                </Carousel>
            )
        default:
            return <SingleSlide img={props.imgs}/>
    }
}
  
export default ProfileImage;