import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://thumbs.dreamstime.com/b/team-group-doctors-nurses-medicine-healthcare-concept-43521488.jpg'
                    alt="First slide"
                />
                <Carousel.Caption className='bannerTitle'>
                    <h3>MY Duty To Help YOu..</h3>
                    <p>"Those who suffer need you to be something more than a doctor; they need you to be a healer. And, to become a healer, you must do something even more difficult than putting your white coat on. You must take your white coat off. You must recover, embrace, and treasure the memory of your shared, frail humanity – of the dignity in each and every soul."</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://image.shutterstock.com/image-photo/medicine-cardiology-healthcare-concept-group-260nw-1675058455.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption className='bannerTitle'>
                    <h3>MY Duty To Help YOu..</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://media.istockphoto.com/photos/doctor-at-hospital-wearing-medical-mask-to-protect-against-2019-picture-id1216072643?k=20&m=1216072643&s=612x612&w=0&h=KkEPALPZpX6sWLVzkzrqMJdGPbJXNi22zaPI6zePFB8='
                    alt="Third slide"
                />

                <Carousel.Caption className='bannerTitle'>
                    <h3>MY Duty To Help YOu..</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;