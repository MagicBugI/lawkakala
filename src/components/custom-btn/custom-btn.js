import React from 'react';

import './custom-btn.scss';

const CustomBtn = ({children , isGoogleBtn, inverce, ...otherProps})=>{
    return(
        <button className={`${isGoogleBtn?'google-btn':''}
        ${inverce ? 'inverce' : ''}
        custom-btn`}  {...otherProps}>
            {children}
        </button>
    )
}

export default CustomBtn;