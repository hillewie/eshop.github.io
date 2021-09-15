import React from "react"
// ROUTER
import { BrowserRouter, Switch, Route } from "react-router-dom"
// SCREENS
import Login from "./screens/Login";
import RegisterUser from "./screens/login/RegisterUser";
import LoginUser from "./screens/login/LoginUser";
// PARTS
import NavbarMobile from "./parts/NavbarMobile"
import HomePage from "./screens/HomePage";
import Navbar from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarMobile>
          <Navbar>
        
            <Switch>
              <Route exact path="/" component={ Login }/>
              <Route path="/login" component={ LoginUser }/>
              <Route path="/register" component={ RegisterUser }/>
              <Route path="/home" component={ HomePage }/>
            </Switch>

          </Navbar>
        </NavbarMobile>
      </BrowserRouter>
    </>
  );
}

export default App;
