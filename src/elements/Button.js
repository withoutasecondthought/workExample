import React from 'react';

const Button = ({text, onClick}) => {
    return (
        <div className="Button" onClick={onClick}>
            {text}
        </div>
    );
};

export default Button;