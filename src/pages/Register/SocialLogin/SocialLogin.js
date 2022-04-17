import React from 'react';
import google from '../../../images/icon/google.png';
import github from '../../../images/icon/github.png';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Spiner from '../../Shared/Spiner/Spiner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    
    let from = location.state?.from?.pathname || "/";

    if(user || user1){
        navigate(from, { replace: true })
    };

    return (
        <div>
            <div className='d-flex align-items-center my-3'>
                <div className='w-100 bg-info' style={{ height: '1px' }}></div>
                <div className='mx-2 text-white'><span>or</span></div>
                <div className='w-100 bg-info' style={{ height: '1px' }}></div>
            </div>
            <div>
                <p className='text-danger'>{error?.message} {error1?.message}</p>
            </div>
            <div>
                {
                    loading || loading1 ? <Spiner></Spiner> : ""
                }
            </div>
            <button onClick={() => signInWithGoogle()} className='btn text-white border-info w-100 rounded-pill my-2 p-2'>
                <img className='me-2' src={google} width={30} alt="" />Continue with Google
            </button>
            <button onClick={() => signInWithGithub()} className='btn text-white border-info w-100 rounded-pill my-2 p-2'>
                <img className='me-2' src={github} width={30} alt="" />Continue with GitHub
            </button>
        </div>
    );
};

export default SocialLogin;