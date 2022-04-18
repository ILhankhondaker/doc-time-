import { NavLink, useParams } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = () => {

    const { serviceId } = useParams();
    console.log(useParams())
    return (
        <div>

            <h2 className='texx'>Your Operation Service No: {serviceId}</h2>

            <div className='text-center'>
                <NavLink to="/checkout">
                    <button className='btn btn-primary'>Click For Booking </button>
                </NavLink>
            </div>
        </div>
    );
};

export default ServiceDetail;