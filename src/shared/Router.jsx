import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "@pages/Home";
import Detail from "@pages/Detail";
import Profile from "@pages/Profile";
import Login from "@pages/Login";

export default function Router() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
