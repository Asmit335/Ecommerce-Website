import React from 'react';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<ProtectedroutesForUser>
          <Order />
        </ProtectedroutesForUser>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<ProtectedrouteForAdmin>
          <Dashboard />
        </ProtectedrouteForAdmin>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/updateproduct" element={<ProtectedrouteForAdmin>
          <UpdateProduct/>
        </ProtectedrouteForAdmin>}/>
        <Route path="/addproduct" element={<ProtectedrouteForAdmin>
          <AddProduct/>
        </ProtectedrouteForAdmin>}/>
        <Route path="/*" element={<Nopage />} />
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
    </>
  );
};

export default App;

//ForUser

export const ProtectedroutesForUser=({children})=>{
  const user = localStorage.getItem('user')
  if(user){
    return children
  }
  else{
    return <Navigate to='/login'/>
  }
}

//ForAdmin

export const ProtectedrouteForAdmin=({children})=>{
  const admin=JSON.parse(localStorage.getItem('user'))

  if(admin.user.email==='asmitkhanal335@gmail.com')
  {
    return children
  }
  else{
    return <Navigate to="/login"/>
  }
}
