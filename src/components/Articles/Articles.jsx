import React from 'react';

// Components
import Article from './Article/Article';

// Styling
import './Articles.scoped.scss';

// Assets
import currencyImg from '../../assets/image-currency.jpg';
import restaurantImg from '../../assets/image-restaurant.jpg';
import planeImg from '../../assets/image-plane.jpg';
import confettiImg from '../../assets/image-confetti.jpg';

const Articles = () => {
  return (
      <section className='articles'>

        <div className="article__content container container--pall">

            <h2>Latest Artciles</h2>

            <div className="article__grid">

                <Article 
                    img={currencyImg}
                    author="Claire Robinson" 
                    title="Receive money in any currency with no fees" 
                    text="The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …"
                />

                <Article 
                    img={restaurantImg}
                    author="Wilson Hutton" 
                    title="Treat yourself without worrying about money" 
                    text="Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …"
                />

                <Article 
                    img={planeImg}
                    author="Wilson Hutton" 
                    title="Take your Easybank card wherever you go" 
                    text="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                    while you’re abroad. We’ll even show you …"
                />

                <Article 
                    img={confettiImg}
                    author="Claire Robinson" 
                    title="Our invite-only Beta accounts are now live!" 
                    text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                    It’s easy to request an invite through the site ..."
                />

            </div>

        </div>

      </section>
  )
};

export default Articles;
