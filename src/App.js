import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import DdadMenu from "./components/Navbar.js";
import DdadRoutes from "./components/Routes.js";
import DdadFooter from "./components/Footer.js";
import DdadCopyright from "./components/Copyright.js";
import { Stack } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DdadMenu />
        <Stack gap={5}>
          <div>
            <DdadRoutes />
          </div>
          <div>
            <DdadFooter />
          </div>
          <div>
            <DdadCopyright />
          </div>
        </Stack>
      </BrowserRouter>
    </div>
  );
}

export default App;
