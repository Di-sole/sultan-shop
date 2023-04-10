import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { CartPage } from './pages/CartPage/CartPage';
import { ProductCardPage } from './pages/ProductCardPage/ProductCardPage';
import { AdminPage } from './pages/AdminPage/AdminPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="wrapper">
      <Routes>
          <Route path="/sultan-shop/" element={<CatalogPage />} />
          <Route path="/sultan-shop/cart" element={<CartPage />} />
          <Route path="/sultan-shop/product/:barcode" element={<ProductCardPage />} />
          <Route path="/sultan-shop/admin" element={<AdminPage />} />
      </Routes>
    </div> 
  );
}

export default App;
