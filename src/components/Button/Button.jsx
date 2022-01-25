import React from 'react';

// Styling
import './Button.scoped.scss';

const Button = ({text, hideForMobile, style}) => {
    return (
        <button type="button" className={hideForMobile && "hide-for-mobile"} style={style}>
            {text}
        </button>
    )
}

export default Button
