import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const { serviceId } = useParams();
    console.log(useParams())
    return (
        <div>

            <h2>Welcome to detail: {serviceId}</h2>
            <h3>Name: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatem nisi, libero in earum maiores molestiae suscipit quia? Voluptatem, in. </h3>
            <div className='text-center'>
                <NavLink to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </NavLink>
            </div>
        </div>
    );
};

export default ServiceDetail;