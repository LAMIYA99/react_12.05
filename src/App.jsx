
import {
  BrowserRouter,
  Routes, Route,
} from "react-router";
import React from 'react';
import Layout from './layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import HeadphonesPage from './pages/HeadphonesPage';
import AccessoriesPage from './pages/AccessoriesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotfoundPage from "./pages/NotfoundPage";


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/phones" element={<HeadphonesPage />} />
          <Route path="/accessories" element={<AccessoriesPage/>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotfoundPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

