import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Components/Layout";
import Posts from "./Pages/Posts";
import Post from "./Pages/Post";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path=":id" element={<Post />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
