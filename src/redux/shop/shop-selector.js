
import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollectionItems = createSelector([selectShop], shop => shop.collections);