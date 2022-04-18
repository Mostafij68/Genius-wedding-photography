import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-1 text-center my-5'>Blogs</h1>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-1"></div>
                <div className="col-lg-6 col-md-6 col-sm-10 bg-1 p-4 rounded">
                    <div className='mb-5'>
                        <div className="d-flex my-3">
                            <h5 className='text-info me-2'>1.Que:</h5>
                            <h3 className='text-2'>Difference between authorization and authentication?</h3>
                        </div>
                        <div className="d-flex">
                            <h5 className='text-info me-2'>Ans:</h5>
                            <p className='text-white fs-5'>
                                Authentication is the process of identifying a user for access. After identification, the user is granted an authorization process. Authorization is the permission given to the user to access. The Authorization process is granted when a user is identified.
                            </p>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <div className="d-flex my-3">
                            <h5 className='text-info me-2'>2.Que:</h5>
                            <h3 className='text-2'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                        </div>
                        <div className="d-flex">
                            <h5 className='text-info me-2'>Ans:</h5>
                            <div>
                                <p className='text-white fs-5'>
                                    I'm using Firebase on my website for user authentication because it saves user data securely. It is a platform developed by Google.
                                </p>
                                <p className='text-white fs-5'>
                                    There are many options to implement authentication like Firebase. Such as STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg, Authress, Auth0, Amazon Cognito and OneLogin.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex my-3">
                            <h5 className='text-info me-2'>3.Que:</h5>
                            <h3 className='text-2'>What other services does firebase provide other than authentication?</h3>
                        </div>
                        <div className="d-flex">
                            <h5 className='text-info me-2'>Ans:</h5>
                            <p className='text-white fs-5'>
                                Firebase provides many kinds of services besides authentication that help us to develop mobile and web applications. Here are many services:
                                <ul>
                                    <li>Cloud Firestore</li>
                                    <li>Cloud Functions</li>
                                    <li>Authentication</li>
                                    <li>Hosting</li>
                                    <li>Cloud Storage</li>
                                    <li>Google Analytics</li>
                                    <li>Predictions</li>
                                    <li>Cloud Messaging</li>
                                    <li>Dynamic Links</li>
                                    <li>Remote Config</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-1"></div>
            </div>
        </div>
    );
};

export default Blogs;