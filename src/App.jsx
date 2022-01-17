import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import "./style.scss";
import Checkout from "./pages/Checkout";
import AuthPage from "./pages/Auth";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div className="App">
      {/* <Checkout/> */}  <Provider store={store}>
        
      <BrowserRouter>
        
        {/* <div className="Top-right">
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </div> */}
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route index element={<Home />}/>
              <Route path="/auth" element={<AuthPage />}/> 
              <Route path="/checkout" element={<Checkout />}/> 
            </Route>
              <Route path="*" element={<NotFound />} />
          </Routes>
     
      </BrowserRouter>
      </Provider>
     
    </div>
  );
}

export default App;
