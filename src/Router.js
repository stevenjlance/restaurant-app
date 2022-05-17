import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route path="/stats" element={<App />}></Route>
      {/* All other routes */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
