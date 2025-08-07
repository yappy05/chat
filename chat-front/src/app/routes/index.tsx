import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../../pages/home.page.tsx";
import ChatPage from "../../pages/chat.page.tsx";
import LoginPage from "../../pages/login.page.tsx";
import RegisterPage from "../../pages/register.page.tsx";
import DirectPage from "../../pages/direct.page.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/home/:id" element={<HomePage />} />
        <Route path="/direct/:id" element={<DirectPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
