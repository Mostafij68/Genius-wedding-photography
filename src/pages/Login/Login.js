import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Register/SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-3 col-sm-2"></div>
                <div className="col-lg-4 col-md-6 col-sm-8 bg-1 text-center py-5 rounded">
                    <h1 className='text-2 mb-5'>Login</h1>
                    <form>
                        <input className='rounded-pill border-0 text-center my-2 p-2 w-100' type="email" name="email" placeholder='Email Address' required />
                        <input className='rounded-pill border-0 text-center my-2 p-2 w-100' type="password" name="password" placeholder='Password' required/>
                        <input className='btn text-2 border-info w-100 rounded-pill my-2 p-2' type="submit" value="Login" />
                    </form>
                    <p className='text-light my-3'>Haven't account? <Link className='text-2 text-decoration-none' to={"/register"}>Create an account</Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-2"></div>
            </div>
        </div>
    );
};

export default Login;