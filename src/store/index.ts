import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { filterReducer } from "./reducers/filterReducer";
import { productsReducer } from "./reducers/productsReducer";
import { sortingReducer } from "./reducers/sortingReducer";

const rootReducer = combineReducers({
	products: productsReducer,
	filter: filterReducer,
	sort: sortingReducer,
	cart: cartReducer
});

const store = createStore(
	rootReducer,
);

export type RootState = ReturnType<typeof rootReducer>; 

export default store;