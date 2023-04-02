import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as CartActionCreators from '../store/actionCreators/cartActions';

export const useCartAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(CartActionCreators, dispatch);
}