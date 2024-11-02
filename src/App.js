import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Datatable from './component/Datatable'; // เส้นทางที่ตรงกับโฟลเดอร์ที่เก็บ Datatable
import Login from './component/Login';
import Navbar from './component/Navbar';
import Register from './component/Register';
import Home from './component/็Home';
import './index.css'; // นำเข้าไฟล์ CSS ที่มี Tailwind
import Account from './component/Account';
import Footer from './component/Footer';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/datatable" element={<Datatable />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/account" element={<Account />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
