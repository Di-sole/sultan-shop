import { clearSorting, setSelectedSort } from "../actionCreators/sortingActions";
import { sortingReducer } from "./sortingReducer";

describe('sortingReduser test', () => {
    test('setSelectedSort', () => {
        expect(sortingReducer({selectedSort: ''}, setSelectedSort('name_ascending'))).toEqual({selectedSort: 'name_ascending'});
    });
    test('clearSorting', () => {
        expect(sortingReducer({selectedSort: 'name_ascending'}, clearSorting())).toEqual({selectedSort: ''})
    });
})