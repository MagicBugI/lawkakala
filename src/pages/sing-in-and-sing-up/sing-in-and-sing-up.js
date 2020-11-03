import React from 'react';

import SingIn from '../../components/sing-in/sing-in';
import SingUp from '../../components/sing-up/sing-up';
import './sing-in-and-sing-up.scss'

const InAndUp = ()=>{
    return(
        <div className='sing-wrap'>
            <SingIn></SingIn>
            <SingUp></SingUp>
        </div>
    )
}

export default InAndUp;