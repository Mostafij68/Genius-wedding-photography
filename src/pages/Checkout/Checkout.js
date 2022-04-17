import React from 'react';

const Checkout = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center' style={{height: '505px'}}>
            <div className='text-center bg-1 p-5 rounded'>
                <input className='rounded-pill border-0 text-center my-2 p-2 w-100' type="text" placeholder='Enter Amount' />
                <button className='btn text-2 border-info w-100 rounded-pill my-2 p-2'>Buy Now</button>
            </div>
        </div>
    );
};

export default Checkout;