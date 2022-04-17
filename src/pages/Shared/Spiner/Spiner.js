import React from 'react';

const Spiner = () => {
    return (
        <div>
            <div className='text-center my-2'>
                <div className="spinner-border text-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Spiner;