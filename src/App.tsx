import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Policy } from "./pages/Policy";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/privacy-policy" element={<Policy/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/product" element={<Product/>} />
    </Routes>
  </Router>
  );
}

export default App;
