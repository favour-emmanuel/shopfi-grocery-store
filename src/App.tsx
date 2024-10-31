import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Coupons from "./pages/Coupons";
import HomePage from "./pages/HomePage";
import Pages from "./pages/Pages";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/coupons" element={<Coupons />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog-details" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
