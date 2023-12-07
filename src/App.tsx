import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { NotFound } from "./pages/notfound/NotFound"
import { Lodging } from "./pages/Lodging"
import { Layout } from "./components/layout/Layout"



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lodging/:id" element={<Lodging />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
