import React from 'react';
import './form-input.styles.scss';

const FormInput = ({label,handleChange,error,...otherProps}) => {
    return (
        <div className="group">
            <label className="form-input-label" >{label}</label> <br/>
            <input className="form-input" {...otherProps} onChange={handleChange} /> <br/>
            {error.length > 0 && <span className='error'>{error}</span>}      
            
        </div>
    )
}
export default FormInput;