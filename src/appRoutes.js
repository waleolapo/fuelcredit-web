import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from './auth/login';
import NotFound from './pages/notFound.js'
import Home from './pages/home.js'
import Register from "./auth/register";


const AppRoutes = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Navigate to="/fuelcredit-web" />} />
            <Route exact path="/fuelcredit-web" element={ <Home /> } />
            <Route path="/fuelcredit-web/login" element={ <Login/> } />
            <Route path="/fuelcredit-web/sign-up" element={ <Register/> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
      </BrowserRouter>
    );
  }



  export default AppRoutes;