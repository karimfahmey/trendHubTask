import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/homepage/Homepage";
import SinglePost from "../../pages/singlepost/SinglePost";

const NavBar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavBar;
