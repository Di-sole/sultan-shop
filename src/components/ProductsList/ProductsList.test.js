import { screen } from '@testing-library/react';
import { renderWithReduxAndRouter } from '../../../tests/helpers/renderWithReduxAndRouter';

describe('products list test', () => {
    beforeEach(() => renderWithReduxAndRouter());

    test('number of products in first page test', async () => {
        const productLinks = screen.getAllByTestId('product-link');
        expect(productLinks.length).toBe(12);
    });
    test('number of pages test', async () => {
        const pageBtn = screen.getAllByTestId('page-btn');
        expect(pageBtn.length).toBe(2);
    });
})