import { SortingAction, SortingActionTypes } from "../../types/sorting"

export const setSelectedSort = (payload: string): SortingAction => {
    return {
        type: SortingActionTypes.SET_SELECTED_SORT, 
        payload: payload
    }
}

export const clearSorting = (): SortingAction => {
    return {
        type: SortingActionTypes.CLEAR_SORTING
    }
}
