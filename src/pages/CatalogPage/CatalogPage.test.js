import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithRedux } from '../../../tests/helpers/renderWithRedux';

describe('Router test', () => {
    beforeEach(() => renderWithRedux());

    test('test redirect to cart page', async () => {
        const cartLink = screen.getByTestId('cart-link');
        act(() => {
            fireEvent.click(cartLink);
        });
        expect(screen.getByTestId('cart-page')).toBeInTheDocument();
    });

    test('test redirect to admin page', async () => {
        const adminLink = screen.getByTestId('admin-link');
        act(() => {
            fireEvent.click(adminLink);
        });
        expect(screen.getByTestId('admin-page')).toBeInTheDocument();
    });

    test('test redirect to product page', async () => {
        const productLinks = screen.getAllByTestId('product-link');
        act(() => {
            fireEvent.click(productLinks[0]);
        });
        expect(screen.getByTestId('product-page')).toBeInTheDocument();
    });
});

describe('products list test', () => {
    beforeEach(() => renderWithRedux());

    test('number of products in first page test', async () => {
        const productLinks = screen.getAllByTestId('product-link');
        expect(productLinks.length).toBe(12);
    });
    test('number of pages test', async () => {
        const pageBtn = screen.getAllByTestId('page-btn');
        expect(pageBtn.length).toBe(2);
    });
})