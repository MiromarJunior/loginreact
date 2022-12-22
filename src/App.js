import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import { AuthProvider } from "../src/context";

const App = () => {
  return(
    <AuthProvider>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App;