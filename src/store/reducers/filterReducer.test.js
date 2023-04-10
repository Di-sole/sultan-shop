import { setSelectedParams } from "../actionCreators/filterActions";
import { filterReducer } from "./filterReducer";

describe('filterReducer test', () => {
    test('add new param in selected', () => {
        expect(filterReducer({selectedParams: []}, setSelectedParams('Кремы'))).toEqual({selectedParams: ['Кремы']});
    });
    test('add existed param in selected', () => {
        expect(filterReducer({selectedParams: ['Кремы']}, setSelectedParams('Кремы'))).toEqual({selectedParams: []});
    });
})