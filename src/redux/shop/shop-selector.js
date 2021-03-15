import {createSelector} from 'reselect'

const selectShop = state => state.shop;
const CollectionidMap = {
    hats: 1, 
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

export const selectCollectionItems = createSelector([selectShop], shop => shop.collections);
export const selectCollection = collectionparamurl => 
    createSelector(
        [selectCollectionItems],
        collections => collections.find(collection => collection.id === CollectionidMap[collectionparamurl]) 
    )