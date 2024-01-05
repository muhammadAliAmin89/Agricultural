import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppRouter from './config/appRouter';

function App() {
  return (
    <div className="App">
    <AppRouter />
    </div>
  );
}

export default App;
