import React from 'react';

import {withRouter} from 'react-router-dom';

import  CustomBtn from '../custom-btn/custom-btn';

import './menuItem.scss';

const MenuItem = ({title , large , url , history , match, linkUrl })=>{
    return(
        <div className={large+' menu-item'} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
            <div className="menu-image"
             style={{
                backgroundImage:`url(${url})`
            }}/>
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <small className='subtitle'>View all</small>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);