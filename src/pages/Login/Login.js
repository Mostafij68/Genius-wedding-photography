import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Register/SocialLogin/SocialLogin';
import Spiner from '../Shared/Spiner/Spiner';

const Login = () => {
    const emailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    };

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
    };

    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-3 col-sm-2"></div>
                <div className="col-lg-4 col-md-6 col-sm-8 bg-1 text-center py-5 rounded">
                    <h1 className='text-2 mb-5'>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input ref={emailRef} className='rounded-pill border-0 text-center my-2 p-2 w-100' type="email" name="email" placeholder='Email Address' required />
                        <input className='rounded-pill border-0 text-center my-2 p-2 w-100' type="password" name="password" placeholder='Password' required />
                        <input className='btn text-2 border-info w-100 rounded-pill my-2 p-2' type="submit" value="Login" />
                    </form>
                    <div>
                        <p className='text-danger'>{error?.message}</p>
                    </div>
                    {
                        loading ? <Spiner></Spiner> : ''
                    }
                    <p className='text-light my-3'>Haven't account? <Link className='text-2 text-decoration-none' to={"/register"}>Create an account</Link>
                    </p>
                    <a onClick={handleResetPassword} className='btn btn-link text-light text-2'>Forget password
                    </a>
                    <div>
                        <p className='text-danger'>{error1?.message}</p>
                    </div>
                    {
                        sending ? <Spiner></Spiner> : ''
                    }
                    <SocialLogin></SocialLogin>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-2"></div>
            </div>
        </div>
    );
};

export default Login;