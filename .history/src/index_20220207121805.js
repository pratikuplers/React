import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import './index.css';
//import App from './App';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<Layout />}>
          <Route index component={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));