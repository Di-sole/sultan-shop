export interface FilterState {
    selectedMinPrice: string,
    selectedMaxPrice: string,
    selectedType: string,
    selectedParams: string[],
}

export enum FilterActionTypes {
    SET_SELECTED_MIN_PRICE = 'SET_SELECTED_MIN_PRICE',
    SET_SELECTED_MAX_PRICE = 'SET_SELECTED_MAX_PRICE',
    SET_SELECTED_TYPE = 'SET_SELECTED_TYPE',
    SET_SELECTED_PARAMS = 'SET_SELECTED_PARAMS',
    CLEAR_FILTER = 'CLEAR_FILTER',
}

export type FilterAction = SetMinPriceAction
    | SetMaxPriceAction 
    | SetSelectedTypeAction
    | SetSelectedParamsAction
    | ClearFilterAction;

interface SetMinPriceAction {
    type: FilterActionTypes.SET_SELECTED_MIN_PRICE,
    payload: string
}

interface SetMaxPriceAction {
    type: FilterActionTypes.SET_SELECTED_MAX_PRICE,
    payload: string
}

interface SetSelectedTypeAction {
    type: FilterActionTypes.SET_SELECTED_TYPE,
    payload: string
}

interface SetSelectedParamsAction {
    type: FilterActionTypes.SET_SELECTED_PARAMS,
    payload: string
}

interface ClearFilterAction {
    type: FilterActionTypes.CLEAR_FILTER
}
