import { FilterAction, FilterActionTypes } from "../../types/filter"

export const setSelectedCategory = (payload: string): FilterAction => {
    return {
        type: FilterActionTypes.SET_SELECTED_CATEGORY,
        payload: payload
    }
}

export const setMinPrice = (payload: string): FilterAction => {
    return {
        type: FilterActionTypes.SET_SELECTED_MIN_PRICE,
        payload: payload
    }
}

export const setMaxPrice = (payload: string): FilterAction => {
    return {
        type: FilterActionTypes.SET_SELECTED_MAX_PRICE,
        payload: payload
    }
}

export const setSelectedParams = (payload: string): FilterAction => {
    return {
        type: FilterActionTypes.SET_SELECTED_PARAMS,
        payload: payload
    }
}

export const clearFilter = (): FilterAction => {
    return {
        type: FilterActionTypes.CLEAR_FILTER
    }
}
