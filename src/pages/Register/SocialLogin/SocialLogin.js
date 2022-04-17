import React from 'react';
import google from '../../../images/icon/google.png';
import github from '../../../images/icon/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center my-3'>
                <div className='w-100 bg-info' style={{ height: '1px' }}></div>
                <div className='mx-2 text-white'><span>or</span></div>
                <div className='w-100 bg-info' style={{ height: '1px' }}></div>
            </div>
            <button className='btn text-white border-info w-100 rounded-pill my-2 p-2'>
                <img className='me-2' src={google} width={30} alt="" />Continue with Google
            </button>
            <button className='btn text-white border-info w-100 rounded-pill my-2 p-2'>
                <img className='me-2' src={github} width={30} alt="" />Continue with GitHub
            </button>
        </div>
    );
};

export default SocialLogin;