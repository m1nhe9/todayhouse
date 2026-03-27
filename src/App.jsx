import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from './pages/Home/Home';
import Shopping from './pages/Shopping/Shopping';

function App() {
  return (
    <Routes>      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
      </Route>
    </Routes>
  );
}

export default App;