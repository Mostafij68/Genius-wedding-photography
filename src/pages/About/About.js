import React from 'react';
import profile from '../../images/profile/profile.png';

const About = () => {
    return (
        <div className='container'>
            <h1 className='text-1 text-center my-5'>About me</h1>
            <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-1"></div>
                <div className="col-lg-4 col-md-6 col-sm-10 bg-1 p-4 rounded">
                    <div>
                        <div className='w-75 mx-auto my-5 bg-white border border-5 border-info rounded'>
                            <img className='mw-100' src={profile} alt="" />
                        </div>
                        <p className='text-white fs-5'>
                            Hi, this is <span className='text-2'>Mostafij</span>. A junior web developer. Now I'm learning web development deeply with Programming-Hero. I spend 8-10 hours regularly for learning code.  My goal is to become an expert-level full-stack web developer. Where I can help people to grow their businesses. And I believe that with a lot of practice and hard work, I can achieve my goal.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-1"></div>
            </div>
        </div>
    );
};

export default About;