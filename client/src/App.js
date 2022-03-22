import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ViewCards from "./Components/ViewCards";
import Categories from "./Components/Categories";
import Home from "./Components/Home";
import SignUpForm from "./Components/SignUpForm";

// function getData() {
//   axios
//     .get("http://localhost:8000/api/v1/users", config)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {});
// }

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjllYjZkYmU5MjBhODFiMzBiMzY2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzk1ODMwMywiZXhwIjoxNjQ4MDQ0NzAzfQ.-ZcGLCdHH8baBVz9Y53-ppNex3vDVSwBGAJloIli-Cg";
// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/cards" element={<ViewCards />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
