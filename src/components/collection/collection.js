import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentCollection } from '../../redux/store/store.selectors';
import CollectionItem from '../collection-item/collection-item';
import './collection.scss';
const Collection = ({match , collection})=>{
    const { items , title} = collection;
    return(
        <div className='collection'>
            <div className='collection-header'>
            <h3>Colection {title}</h3>
            </div>
           <div className='collection-main'>
           {items.map(item => <CollectionItem key={item.id} item={item}></CollectionItem>)}
           </div>
        </div>
    )
}

const mapStateToProps = (state , props) =>({
    collection: selectCurrentCollection(props.match.params.collectionID)(state)
})

export default connect(mapStateToProps)(Collection);