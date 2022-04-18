import React, { useEffect, useState } from 'react';
import HomeTreeService from '../HomeTreeService/HomeTreeService';

const HomeService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const treeService = services.slice(1, 4)
    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Services</h1>
                <div className="services-container">
                    {
                        treeService.map(service => <HomeTreeService
                            key={service.id}
                            service={service}></HomeTreeService>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeService;