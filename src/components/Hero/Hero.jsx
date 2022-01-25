import React from 'react';

// Components
import Button from '../Button/Button';

// Styling
import './Hero.scoped.scss';


const Hero = () => {
  return (
    <section className='hero'>
        <div className="container">
            <div className="hero__image"></div>
            <div className="hero__text container--pall">
                <h1>Next generation digital banking</h1>
                <p>
                    Take your financial life online. 
                    Your Easybank account will be a one-stop-shop for spending, 
                    saving, budgeting, investing, and much more.
                </p>
                <Button text="Request Invite" />
            </div>
        </div>
    </section>
  );
};

export default Hero;
