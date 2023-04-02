import * as ProductsActionCreator from './productsActions';
import * as CartActionCreator from './cartActions';
import * as FilterActionCreator from './filterActions';
import * as SortingActionCreator from './sortingActions';

export default {
    ...ProductsActionCreator,
    ...CartActionCreator,
    ...FilterActionCreator,
    ...SortingActionCreator
}