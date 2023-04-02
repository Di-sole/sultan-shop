import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as SortingActionCreators from '../store/actionCreators/sortingActions';

export const useSortingAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(SortingActionCreators, dispatch);
}