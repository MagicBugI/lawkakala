import React from 'react';

import {connect} from 'react-redux';
import {setItem} from '../../redux/cart/cart.action'

import './collection-item.scss';
import  CustomBtn from '../custom-btn/custom-btn';

const CollectionItem = ({item , setItem})=>{
    const { imageUrl , name , price} = item;
    return(
        <div className='collection_item'>
            <div className='image'
            style={{backgroundImage:`url(${imageUrl})`}}
            >
            </div>
            <div className='info'>
            <strong>{name}</strong>
            <p>{price}$</p>
            </div>
            <CustomBtn inverce onClick={()=>{setItem(item)}}>
                Add to cart
            </CustomBtn>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    setItem : user => dispatch(setItem(user))
});


export default connect(null , mapDispatchToProps)(CollectionItem);