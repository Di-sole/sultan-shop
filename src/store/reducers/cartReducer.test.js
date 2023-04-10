import { addToCart, increaseCount, decreaseCount, confirmPurchase } from "../actionCreators/cartActions";
import { cartReducer } from "./cartReducer";

describe('cartReducer test', () => {
    let product = {
        item: {name: 'Мыло', price: '50'}, 
        count: 1
    }

    test('add new product in cart', () => {
        expect(cartReducer({productsInCart: [], totalPrice: 0}, addToCart(product))).toEqual({productsInCart: [product], totalPrice: 50});
    });
    test('increase count', () => {
        expect(cartReducer({productsInCart: [product], totalPrice: 50}, increaseCount(product))).toEqual({productsInCart: [{...product, count: 2}], totalPrice: 100});
    });
    test('decrease count', () => {
        expect(cartReducer({productsInCart: [product], totalPrice: 100}, decreaseCount(product))).toEqual({productsInCart: [{...product, count: 1}], totalPrice: 50});
    });
    test('confirm purchase', () => {
        expect(cartReducer({productsInCart: [product], totalPrice: 50}, confirmPurchase())).toEqual({productsInCart: [], totalPrice: 0});
    });
})