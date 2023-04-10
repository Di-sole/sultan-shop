import { addToCart, increaseCount, decreaseCount, confirmPurchase, updateTotalPrice } from "../actionCreators/cartActions";
import { cartReducer } from "./cartReducer";

describe('cartReducer test', () => {
    let product = {
        item: {name: 'Мыло', price: '50'}, 
        count: 1
    }

    test('add new product in cart', () => {
        expect(cartReducer({productsInCart: []}, addToCart(product)))
            .toEqual({productsInCart: [product]});
    });
    test('increase count', () => {
        expect(cartReducer({productsInCart: [product]}, increaseCount(product)))
            .toEqual({productsInCart: [{...product, count: 2}]});
    });
    test('decrease count', () => {
        expect(cartReducer({productsInCart: [product]}, decreaseCount(product)))
            .toEqual({productsInCart: [{...product, count: 1}]});
    });
    test('confirm purchase', () => {
        expect(cartReducer({productsInCart: [product], totalPrice: 50}, confirmPurchase()))
            .toEqual({productsInCart: [], totalPrice: 0});
    });
})