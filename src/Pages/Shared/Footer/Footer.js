import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer'>
            <div className='info'>
                <div> <p>Service Time: 24/7</p>
                </div>
                <div>Name:Ilhan Khondaker <br />
                    Contact: +8801680576091
                    <br />location: Feni <br />E-mail:ilhankhondaker@gmail.com
                </div>
            </div>
            <footer className='text-center mt-5'>
                <p><small>copyright @ Ilhan Khondaker {year} </small></p>
            </footer>
        </div>

    );
};

export default Footer;