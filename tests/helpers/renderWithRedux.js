import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ProductCardPage } from '../../src/pages/ProductCardPage/ProductCardPage';
import { CatalogPage } from '../../src/pages/CatalogPage/CatalogPage';
import { CartPage } from '../../src/pages/CartPage/CartPage';
import { AdminPage } from '../../src/pages/AdminPage/AdminPage';
import store from '../../src/store';

export const renderWithRedux = (initialRoute = '/sultan-shop') => {
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route path="/sultan-shop/" element={<CatalogPage />} />
                    <Route path="/sultan-shop/cart" element={<CartPage />} />
                    <Route path="/sultan-shop/product/:barcode" element={<ProductCardPage />} />
                    <Route path="/sultan-shop/admin" element={<AdminPage />} />
                </Routes>
            </MemoryRouter>
        </Provider>    
    )
}