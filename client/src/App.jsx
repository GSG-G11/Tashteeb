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
import EngineerPage from './Pages/EngineerPage';

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<EngineerProfile />} />
            <Route path="/product/:id" element={<ProductProfile />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="product" element={<ProductList />} />
              <Route path="satistics" element={<Satistics />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="/info" element={<ProductDetailes />} />
            <Route path="/eng" element={<EngineerPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ProvideAuth>
    </div>
  );
}
export default App;
