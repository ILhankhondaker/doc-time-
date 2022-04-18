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
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://image.shutterstock.com/image-photo/medicine-cardiology-healthcare-concept-group-260nw-1675058455.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption className='bannerTitle'>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://media.istockphoto.com/photos/doctor-at-hospital-wearing-medical-mask-to-protect-against-2019-picture-id1216072643?k=20&m=1216072643&s=612x612&w=0&h=KkEPALPZpX6sWLVzkzrqMJdGPbJXNi22zaPI6zePFB8='
                    alt="Third slide"
                />

                <Carousel.Caption className='bannerTitle'>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;