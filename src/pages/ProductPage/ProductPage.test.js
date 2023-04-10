import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithReduxAndRouter } from '../../../test/helpers/renderWithReduxAndRouter';

describe('Product page test', () => {
    beforeEach(() => renderWithReduxAndRouter('/sultan-shop/product/8809407726061'));

    test('correct initial count', () => {
        expect(screen.getByTestId('countbar-value')).toHaveTextContent('1');
    })

    test('incorrect initial count', () => {
        expect(screen.getByTestId('countbar-value')).not.toHaveTextContent('0');
    })

    test('increase count', async () => {
        const increaseBtn = screen.getByTestId('increase-btn');
        act(() => fireEvent.click(increaseBtn));
        expect(screen.getByTestId('countbar-value')).toHaveTextContent('2');
        act(() => fireEvent.click(increaseBtn));
        expect(screen.getByTestId('countbar-value')).toHaveTextContent('3');
    });

    test('increase and decrease count', async () => {
        const increaseBtn = screen.getByTestId('increase-btn');
        const decreaseBtn = screen.getByTestId('decrease-btn');
        act(() => fireEvent.click(increaseBtn));
        expect(screen.getByTestId('countbar-value')).toHaveTextContent('2');
        act(() => fireEvent.click(decreaseBtn));
        expect(screen.getByTestId('countbar-value')).toHaveTextContent('1');
    });

    test('decrease initial count', async () => {
        const decreaseBtn = screen.getByTestId('decrease-btn');
        act(() => fireEvent.click(decreaseBtn));
        expect(screen.getByTestId('countbar-value')).toHaveTextContent('1');
    });

    test('update product price', async () => {
        const price = screen.getByTestId('price-value')
        const increaseBtn = screen.getByTestId('increase-btn');
        expect(price).toHaveTextContent('193');
        act(() => fireEvent.click(increaseBtn));
        expect(price).toHaveTextContent('386');

    });
});