import React from 'react';

import './form-input.scss';

const FormInput = ({handleChange , label , ...otherProps})=>{
    return(
        <div className='group'>
            <label className={`${otherProps.value.length?'srink':''} form-input-label`}>{label}</label>
            <input className='form-input' onChange={handleChange} {...otherProps} />

        </div>
    )
}

export default FormInput;