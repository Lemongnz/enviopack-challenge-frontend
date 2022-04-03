import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadProfile } from "../reducers/profile";
import profileService from "../services/profile.service";
import { store } from "../store";
import "./App.css";
import HeaderEnviopack from "./components/Header";
import CartScreen from "./screens/Cart";
import CatalogueScreen from "./screens/Catalogue";
import PurchaseScreen from "./screens/Purchase";

function App() {
  useEffect(async () => {
    const { profile } = await profileService.getAll();
    store.dispatch(loadProfile(profile));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <HeaderEnviopack />
        <div className="App">
          <Routes>
            <Route path="/" element={<CatalogueScreen />} />
            <Route exact path="/cart" element={<CartScreen />}></Route>
            <Route exact path="/purchase" element={<PurchaseScreen />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
