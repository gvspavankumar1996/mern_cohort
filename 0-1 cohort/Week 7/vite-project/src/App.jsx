import React, { useState, Suspense,lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import Header from "./components/Header";
// const Header = React.lazy(()=>import("./components/Header"));
const Dashboard = lazy(() => import("./components/Dashboard"));
// const Landing = React.lazy(()=>import("./components/Landing"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
