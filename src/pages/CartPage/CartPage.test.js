import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithReduxAndRouter } from '../../../test/helpers/renderWithReduxAndRouter';

describe('cart page test', () => {
    beforeEach(() => renderWithReduxAndRouter('/sultan-shop/cart'));

    test('modal not open', async () => {
        const modalEl = screen.getByTestId('modal');
        expect(modalEl).not.toHaveClass('active')
    });
})