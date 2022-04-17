import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, price, description, id } = service;
    const navigate = useNavigate();

    const handleCheckOut = (id) => {
        navigate(`services/${id}`)
    };

    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4 card-group'>
            <div className="card shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h2 className="card-title fs-1 text-1">{name}</h2>
                    <p className='text-2 fs-5 fw-bold'>Price: {price}</p>
                    <p className="card-text text-muted">{description}</p>
                </div>
                <button onClick={() =>handleCheckOut(id)} className='btn bg-1 text-2 w-50 mx-auto my-3'>Check Out</button>
            </div>
        </div>
    );
};

export default Service;