import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ProductDetail } from "./pages/ProductDetail";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="checkout" element={<Checkout />} />



            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
