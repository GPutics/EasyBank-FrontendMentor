import React from 'react';

// Components
import Feature from './Feature/Feature';

// Styling
import './Features.scoped.scss';

// Assets
import IconOnline from '../../assets/icon-online.svg';
import IconBudgeting from '../../assets/icon-budgeting.svg';
import IconOnboarding from '../../assets/icon-onboarding.svg';
import IconApi from '../../assets/icon-api.svg';

const Features = () => {
    return (
        <section className="feature">

            <div className="feature__content container container--pall">

                <div className="feature__intro">
                    <h2>Why choose Easybank?</h2>
                    <p>
                        We leverage Open Banking to turn your bank account into your financial hub.
                        Control your finances like never before.
                    </p>
                </div>

                <div className="feature__grid">
                    <Feature 
                        img={IconOnline} 
                        title={"Online Banking"} 
                        text={"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."} 
                    />
                    <Feature 
                        img={IconBudgeting} 
                        title={"Simple Budgeting"} 
                        text={"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."} 
                    />
                    <Feature 
                        img={IconOnboarding} 
                        title={"Fast Onboarding"} 
                        text={"We don’t do branches. Open your account in minutes online and start taking control of your finances right away."} 
                    />
                    <Feature 
                        img={IconApi} 
                        title={"Open Api"} 
                        text={"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."} 
                    />
                </div>

            </div>


        </section>
    );
};

export default Features;

