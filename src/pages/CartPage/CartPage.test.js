import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithRedux } from '../../../tests/helpers/renderWithRedux';

describe('cart page test', () => {
    beforeEach(() => renderWithRedux('/sultan-shop/cart'));

    test('modal not open', async () => {
        const modalEl = screen.getByTestId('modal');
        expect(modalEl).not.toHaveClass('active')
    });
})