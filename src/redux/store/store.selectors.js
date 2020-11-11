import {createSelector} from 'reselect';

const store = state => state.store;

export const  selectStoreItems = createSelector(
    [store] , 
    store => store
);

export const selectCurrentCollection = collectionId =>
    createSelector(
        [selectStoreItems] , 
        collection => 
        collection.find(
            collection => collection.routeName === collectionId
            )
    )