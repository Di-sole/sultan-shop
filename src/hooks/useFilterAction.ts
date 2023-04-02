import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as FilterActionCreators from '../store/actionCreators/filterActions';

export const useFilterAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(FilterActionCreators, dispatch);
}