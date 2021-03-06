import React  from 'react';
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview';
import Collection from '../../components/collection/collection';

const ShopPage = ({match})=>{
    return(
        <div className='shop-page'> 
            <Route exact path={match.path} component={CollectionOverview}></Route>
            <Route  path={`${match.path}/:collectionID`} component={Collection}></Route>        
        </div>
    )
}


export default ShopPage;