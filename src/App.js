import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import StartAtTop from "./components/StartAtTop";
import { BrowserRouter } from "react-router-dom";
import DdadMenu from "./components/Navbar.js";
import { Stack } from "react-bootstrap";
import DdadRoutes from "./components/Routes.js";
import DdadFooter from "./components/Footer.js";
import DdadCopyright from "./components/Copyright.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StartAtTop>
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
        </StartAtTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
