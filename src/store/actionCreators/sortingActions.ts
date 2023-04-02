import { Dispatch } from "redux"
import { SortingAction, SortingActionTypes } from "../../types/sorting"

export const setSelectedSort = (payload: string): SortingAction => {
    return {
        type: SortingActionTypes.SET_SELECTED_SORT, 
        payload: payload
    }
}
