import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { CartPage } from './pages/CartPage/CartPage';
import { ProductCardPage } from './pages/ProductCardPage/ProductCardPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './styles/App.css';

const prod = {
  id: 4,
  name: 'Гель для душа Vitamin Family "5 злаков" питательный',
  img: 'https://image.galacentre.ru/size/1000/6G7BRAD.jpg',
  size_type: 'мл',
  size: '650',
  barcode: '4607070931126',
  manufacturer: 'Домашний сундук',
  brand: 'Vitamin Family',
  description: 'Любите процедуры ухода за кожей, но устали тратить немало средств на различные товары? Тогда советуем купить гель для душа VITAMIN FAMILY "5 злаков". Это средство совмещает в себе, и очищающий эффект, и различные компоненты, которые помогут даже сухой коже стать мягкой и шелковистой. Все это возможно благодаря содержанию комплекса витаминов: А, В1, С, Е, К. Средство хорошо пениться и экономично расходуется, что тоже важно при выборе геля для душа.',
  price: '285',
  category: ['Средства для ванны и душа', 'Гели для душа']
}

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:barcode" element={<ProductCardPage product={prod} />} />
      </Routes>
      
      <Footer />
    </div> 
    
  );
}

export default App;
