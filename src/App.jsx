import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"
import BestSeller from "./pages/BestSeller"
import Products from "./pages/Products"
import Auth from "./pages/Auth"
import SignUp from "./pages/auth/SignUp"
import SignIn from "./pages/auth/SignIn"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/bestseller"} element={<BestSeller/>}/>
            <Route path={"/products"} element={<Products/>}/>
        </Route>
        <Route>
            <Route path={"/Auth"} element={<Auth/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
            <Route path={"/signin"} element={<SignIn/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
