import { SortingAction, SortingActionTypes, SortingState } from "../../types/sorting";

const initialState: SortingState = {
    selectedSort: '',
};

export function sortingReducer(state = initialState, action: SortingAction): SortingState { 
    switch (action.type) {
        case SortingActionTypes.SET_SELECTED_SORT:
            return {...state, selectedSort: action.payload}
        default:
            return state
    }
}