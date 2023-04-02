export interface SortingState {
    selectedSort: string
}

export enum SortingActionTypes {
    SET_SELECTED_SORT = 'SET_SELECTED_SORT'
}

export type SortingAction = SetSelectedSortAction;

interface SetSelectedSortAction {
    type: SortingActionTypes.SET_SELECTED_SORT,
    payload: string
}
