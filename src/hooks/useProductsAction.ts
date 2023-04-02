import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as ProductsActionCreators from '../store/actionCreators/productsActions';

export const useProductsAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ProductsActionCreators, dispatch);
}