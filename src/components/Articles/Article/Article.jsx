import React from 'react';

// Styling
import './Article.scoped.scss';

const Article = ({img, author, title, text}) => {
  return (
      <a href='#' className='article__item'>
          
        <div className="article__img" style={{backgroundImage: `url(${img})`}}></div>

        <div className="article__text">

            <div className="article__author">
                By {author}
            </div>

            <div className="article__title">
                {title}
            </div>

            <div className="article__description">
                {text}
            </div>

        </div>

      </a>
  )
};

export default Article;
