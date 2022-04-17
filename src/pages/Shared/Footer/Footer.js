import React from 'react';

const Footer = () => {
    return (
        <footer className='w-100 bg-1 text-2 text-center mt-5'>
            <div>
                <p className='p-3 m-0'>&copy; Copyright {new Date().getFullYear()} Genius-wedding-photography.com</p>
            </div>
        </footer>
    );
};

export default Footer;