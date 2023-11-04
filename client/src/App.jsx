import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Apropos from "./pages/Apropos";
import AdminLogout from "./components/AdminLogout";



const App = ()=>{
  const user = useSelector((state)=> state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/success" element={<Success/>}/>
        <Route path="/apropos" element={<Apropos/>}/>
        <Route path="/admin/logout" component={AdminLogout}/>
        <Route
          path="/login"
          element={user ? <Navigate to="/"/> : <Login/>}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/"/> : <Register/>}
        />
      </Routes>
    </Router>
  );
};

export default App;
