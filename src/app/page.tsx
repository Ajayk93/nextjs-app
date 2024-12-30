"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./profile/page";

interface Item {
  id: number;
  name: string;
}

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<ProfilePage /> } />
        <Route path="/" element={<ProfilePage /> } />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
