import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../components/App";

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

export default Root;
