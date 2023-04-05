import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { CartPage } from './pages/CartPage/CartPage';
import { ProductCardPage } from './pages/ProductCardPage/ProductCardPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:barcode" element={<ProductCardPage />} />
      </Routes>
      
      <Footer />
    </div> 
    
  );
}

export default App;
