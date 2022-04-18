import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-1">
                <div className="container">
                    <Link to='/' className='navbar-brand'>Genius Wedding Photography</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link fs-5' to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link fs-5' to='/blogs'>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link fs-5' to='/about'>About</Link>
                            </li>
                            {
                                user ?
                                    <button onClick={handleLogout} className='btn btn-link text-2 text-decoration-none fs-5'>Log Out</button>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className='nav-link fs-5' to='/login'>Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='nav-link fs-5' to='/register'>Register</Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;