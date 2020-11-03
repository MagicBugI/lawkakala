import React from 'react';

import  CollectionItem from '../collection-item/collection-item';

import './collection-preview.scss';
const Collection_Preview = ({items , title})=>{
    return(
        <div className='preview'>
            <h2 className='collection_title'>{title}</h2>
           <div className='preview_wrap'>
            {items.filter((elem , index)=>index<4).map((item)=><CollectionItem key={item.id} item={item}></CollectionItem>)}
           </div>
        </div>
    )
}

export default Collection_Preview;