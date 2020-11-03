import React , {useState} from 'react';

import SHOP_DATA from './shop.data';

import Collecion_Preview from '../../components/collections-preview/collection-preview'
import Collection_Preview from '../../components/collections-preview/collection-preview';

const ShopPage = ()=>{

    const [getShopData , setShopData] = useState(SHOP_DATA);

    return(
        <div>
            {getShopData.map(({id , ...otherCollData})=><Collection_Preview key={id} {...otherCollData}></Collection_Preview>)}
        </div>
    )
}

export default ShopPage;