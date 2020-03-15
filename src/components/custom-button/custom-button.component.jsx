import React from 'react';
import './custom-button.styles.scss';

const CustomBtn = ({children,...otherProps}) => (
    <button className="custom-button" {...otherProps}>{children}<span className="triangle-right"></span></button>
)
export default CustomBtn;
