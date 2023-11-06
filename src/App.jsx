import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Nopage from './pages/nopage/NoPage';
import MyState from './context/data/MyState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import UpdateProduct from './pages/admin/dashboard/page/UpdateProduct';
import AddProduct from './pages/admin/dashboard/page/AddProduct';

const App = () => {
  return (
    <>
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/updateproduct" element={<UpdateProduct/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </Router>
    </MyState>
    </>
  );
};

export default App;
