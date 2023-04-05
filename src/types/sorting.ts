export interface SortingState {
    selectedSort: string
}

export enum SortingActionTypes {
    SET_SELECTED_SORT = 'SET_SELECTED_SORT',
    CLEAR_SORTING = 'CLEAR_SORTING'
}

export type SortingAction = SetSelectedSortAction | ClearSorting;

interface SetSelectedSortAction {
    type: SortingActionTypes.SET_SELECTED_SORT,
    payload: string
}

interface ClearSorting {
    type: SortingActionTypes.CLEAR_SORTING,
}
