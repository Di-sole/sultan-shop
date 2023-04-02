import { FilterAction, FilterActionTypes, FilterState } from "../../types/filter";

const initialState: FilterState = {
    selectedMinPrice: '',
    selectedMaxPrice: '',
    selectedType: '',
    selectedParams: [],
};

export function filterReducer(state = initialState, action: FilterAction): FilterState { 

    switch (action.type) {
        case FilterActionTypes.SET_SELECTED_MIN_PRICE:
            return {...state, selectedMinPrice: action.payload};
        case FilterActionTypes.SET_SELECTED_MAX_PRICE:
            return {...state, selectedMaxPrice: action.payload};
        case FilterActionTypes.SET_SELECTED_TYPE:
            return {...state, selectedType: action.payload};
        case FilterActionTypes.SET_SELECTED_PARAMS:
            const newParams: string[] = [...state.selectedParams];
            const index = state.selectedParams.indexOf(action.payload);

            if (index >= 0) {
                newParams.splice(index, 1);
            } else {
                newParams.push(action.payload);
            }

            return {...state, selectedParams: newParams};
        case FilterActionTypes.CLEAR_FILTER:
            return {
                selectedMinPrice: '',
                selectedMaxPrice: '',
                selectedType: '',
                selectedParams: [],
            }
        default:
            return state;
    }
}