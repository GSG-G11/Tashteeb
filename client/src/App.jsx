import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Component/Home';
import NotFoundPage from './Pages/NotFound';
import { ProvideAuth } from './Context/AuthContext';
import EngineerProfile from './Pages/EngineerProfile';
import ProductProfile from './Pages/ProductProfile';
import Dashboard from './Component/Dashboard';
import Satistics from './Component/Dashboard/Satistics';
import ProductList from './Component/Dashboard/ProductList';
import Orders from './Component/Dashboard/Orders';
<<<<<<< HEAD
=======
import ProdcutsPage from './Pages/productsPage';
>>>>>>> f7c5665cb0bc64ccf36aa77969630be740a47ad0
import Cart from './Pages/Cart';
import EngineerInfo from './Component/Engineer';

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eng" element={<EngineerInfo />} />
            <Route path="/profile/:id" element={<EngineerProfile />} />
            <Route path="/product/:id" element={<ProductProfile />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="product" element={<ProductList />} />
              <Route path="satistics" element={<Satistics />} />
              <Route path="orders" element={<Orders />} />
            </Route>
<<<<<<< HEAD
=======
            <Route path="/products" element={<ProdcutsPage />} />
>>>>>>> f7c5665cb0bc64ccf36aa77969630be740a47ad0
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ProvideAuth>
    </div>
  );
}
export default App;
