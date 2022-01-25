import React from 'react';

// Styling
import './Feature.scoped.scss';

const Feature = ({img, title, text}) => {
  return (
    <div className='feature__item'>

      <div className="feature__icon">
        <img src={img} />
      </div>

      <div className="feature__title">
        {title}
      </div>

      <div className="feature__description">
        {text}
      </div>

    </div>
  )
};

export default Feature;
