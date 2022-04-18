import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div className='about  m-5'>
            <div className='p-5'>
                <h2>I'm Ilhan Khondaker </h2>
                <p>Hi, I’m Ilhan Khondaker. I have experience on Html5, CSS3, CSS framework (Bootstrap, Tailwind ), JavaScript, JavaScript library React Firebase , Mongodb WordPress Elementor, Woo-commerce, Mailchimp and Shopify . As a freelancer I complete more than 120+ project .I work at various market places since 2018 with efficiency. I'm a professional web developer so i know how to give the best service than other ."</p>
                <a target='blank' href="https://ilhan-khondaker.business.site/"> <Button>Business website</Button></a>
                <br /><br />
                <a target='blank' href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zI3PMS1Irsw2YLRSNagwNjc1NrM0SLJMMjaxMEwytTKoSExJNE02SE0yMTVNSUkyNvTiz8zJSMxTyM7Iz0tJzE4tAgDYCxVv&q=ilhan+khondaker&rlz=1C1CHBF_enBD886BD886&oq=Ilhan&aqs=chrome.1.69i57j46i39i175i199j46i512l2j0i512l2j69i65l2.3255j0j7&sourceid=chrome&ie=UTF-8"> <Button>More Info about me..</Button></a>
            </div>
            <div>
                <img className='w-100 rounded-circle' src="https://scontent.fdac13-1.fna.fbcdn.net/v/t1.6435-9/195518759_777353176314051_2441569181417949456_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGEvqCA6Y0JUbznegYTx0OWvJsidAUA-8C8myJ0BQD7wNUrt6tiE5oQrYFypo5WLpQyt628C3-F2O8KpYwvcM14&_nc_ohc=_eNvY6I_snIAX-9abgS&_nc_ht=scontent.fdac13-1.fna&oh=00_AT_xmSnWr21LBucvT628VqQ1qHdjOH-8P4NxghVo6cmKDg&oe=62830A13" alt="" srcset="" />
            </div>
        </div>
    );
};

export default About;