import {getParamValues, getPagesArray, sortProducts, filterProducts} from './utils.js';

describe('getParamValues test', () => {
    let products = [{
        id: 1,
        name: 'Гель для лица и тела Mi-Ri-Ne',
        category: ['Кремы']
    },
    {
        id: 2,
        name: 'Крем для депиляции LADY',
        category: ['Кремы', 'Эпиляция и депиляция']
    },
    {
        id: 3,
        name: 'Мыло твердое',
        category: ['Средства для ванны и душа']
    }]

    test('correct values', () => {
        expect(getParamValues(products, 'category')).toEqual(['Кремы', 'Эпиляция и депиляция', 'Средства для ванны и душа']);
    });
    test('incorrect values', () => {
        expect(getParamValues(products, 'category')).not.toEqual(['Кремы', 'Кремы', 'Эпиляция и депиляция', 'Средства для ванны и душа']);
    });
    test('empty array', () => {
        expect(getParamValues([], 'category')).toEqual([]);
    });
});

describe('getPagesArray test', () => {
    test('correct values', () => {
        expect(getPagesArray(18, 12)).toEqual([1, 2]);
    });
    test('correct values', () => {
        expect(getPagesArray(15, 5)).toEqual([1, 2, 3]);
    });
    test('0 products', () => {
        expect(getPagesArray(0, 5)).toEqual([]);
    });
});

describe('sortProducts test', () => {
    let products = [{
        name: 'Гель',
        price: '193'
    },
    {
        name: 'Крем',
        price: '378'
    },
    {
        name: 'Мыло',
        price: '63'
    }];

    test('sort by name ascending', () => {
        expect(sortProducts('name_ascending', products)).toEqual([{name: 'Гель', price: '193'}, {name: 'Крем', price: '378'}, {name: 'Мыло', price: '63'}]);
    });
    test('sort by name descending', () => {
        expect(sortProducts('name_descending', products)).toEqual([{name: 'Мыло', price: '63'}, {name: 'Крем', price: '378'}, {name: 'Гель', price: '193'}]);
    });
    test('sort by price ascending', () => {
        expect(sortProducts('price_ascending', products)).toEqual([{name: 'Мыло', price: '63'}, {name: 'Гель', price: '193'}, {name: 'Крем', price: '378'}]);
    });
    test('sort by price descending', () => {
        expect(sortProducts('price_descending', products)).toEqual([{name: 'Крем', price: '378'}, {name: 'Гель', price: '193'}, {name: 'Мыло', price: '63'}, ]);
    });
    test('incorrect sorting type', () => {
        expect(sortProducts('price', products)).toEqual(products);
    })
});

describe('filterProducts test', () => {
    let products = [{
        manufacturer: 'Grifon',
        price: '193',
        category: ['Кремы']
    },
    {
        manufacturer: 'Nivea',
        price: '378',
        category: ['Кремы', 'Эпиляция и депиляция']
    },
    {
        manufacturer: 'Домашний сундук',
        price: '63',
        category: ['Средства для ванны и душа']
    }];

    test('filter by min price', () => {
        expect(filterProducts(200, 'min-price', products).length).toBe(1)
    });
    test('filter by max price', () => {
        expect(filterProducts(100, 'max-price', products).length).toBe(1)
    });
    test('filter by manufacturer', () => {
        expect(filterProducts(['Nivea'], 'manufacturer', products).length).toBe(1)
    });
    test('filter by category', () => {
        expect(filterProducts('Кремы', 'category', products).length).toBe(2);
    });
    test('incorrect filter type', () => {
        expect(filterProducts(100, 'price', products)).toEqual(products);
    });
});