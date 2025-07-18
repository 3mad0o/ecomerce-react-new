import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ProductDetail } from "./pages/ProductDetail";
import { Checkout } from "./pages/Checkout";
import ScrollToTop from "./utils/ScrollToTop";
import { ProductReviews } from "./pages/ProductREviews";
import { Category } from "./pages/Category";
import { Orders } from "./pages/Orders";
import { OrderDetails } from "./pages/OrderDetails";
import { WishList } from "./pages/WishList";
import { LoadingProvider } from "./contexts/LoadingProvider";

function App() {
  return (
    <>
      <Provider store={store}>
        <LoadingProvider>
   <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:slug" element={<ProductDetail />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="product/:slug/reviews" element={<ProductReviews />} />
              <Route path="/category/:slug" element={<Category />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<OrderDetails />} />
              <Route path="/wishlist" element={<WishList />} />







            </Route>
          </Routes>
        </Router>

        </LoadingProvider>
     
      </Provider>
    </>
  );
}

export default App;
