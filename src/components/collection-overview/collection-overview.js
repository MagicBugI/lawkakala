import React from 'react';
import Collection_Preview from '../../components/collections-preview/collection-preview';

import {selectStoreItems} from '../../redux/store/store.selectors';
import {connect} from 'react-redux';
import './collection-overview.scss';

const CollectionOverview = ({store})=>{
    return(
        <div className='collection-overview'>
            {store.map(({id , ...otherCollData})=><Collection_Preview key={id} {...otherCollData}></Collection_Preview>)}
        </div>
    )
}

const mapStateToProps = state =>({
    store : selectStoreItems(state)
})

export default connect(mapStateToProps)(CollectionOverview);