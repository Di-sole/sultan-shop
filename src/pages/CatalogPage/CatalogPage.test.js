import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithReduxAndRouter } from '../../../tests/helpers/renderWithReduxAndRouter';

describe('Router test', () => {
    beforeEach(() => renderWithReduxAndRouter());

    test('test redirect to cart page', async () => {
        const cartLink = screen.getByTestId('cart-link');
        act(() => fireEvent.click(cartLink));
        expect(screen.getByTestId('cart-page')).toBeInTheDocument();
    });

    test('test redirect to admin page', async () => {
        const adminLink = screen.getByTestId('admin-link');
        act(() => fireEvent.click(adminLink));
        expect(screen.getByTestId('admin-page')).toBeInTheDocument();
    });

    test('test redirect to product page', async () => {
        const productLinks = screen.getAllByTestId('product-link');
        act(() => fireEvent.click(productLinks[0]));
        expect(screen.getByTestId('product-page')).toBeInTheDocument();
    });
});