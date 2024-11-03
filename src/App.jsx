import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div className="bg-[#F3F4F6] min-h-screen">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductViewPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
