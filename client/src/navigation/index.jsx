import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Menu from "../pages/Menu/Menu"
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess"

const Navigation = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/payment-success" element={<PaymentSuccess />}/>
            </Routes>
        </BrowserRouter>
    )
}



export default Navigation;