<<<<<<< HEAD
import { useState } from 'react';
import Navbar from './components/Navbar';

const App = () =>{
  
} 

export default App
=======
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import SearchKost from "./pages/search-kost/search-kost";
import Profile from "./pages/profile/profile";
import DetailKost from "./pages/detail-kost/detail-kost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchKost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/kost/:id" element={<DetailKost />} />
    </Routes>
  );
}

export default App;
>>>>>>> origin/fitur-pencarian-kost
