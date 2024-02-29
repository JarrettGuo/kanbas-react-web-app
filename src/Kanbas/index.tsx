import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

// Kanbas 组件
export default function Kanbas() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}> {/* 确保整体布局占满整个屏幕高度 */}
      <KanbasNavigation/> {/* KanbasNavigation 会在小屏幕尺寸下隐藏 */}
      <div style={{ flexGrow: 1 }}> {/* 保证这个 div 在 KanbasNavigation 隐藏时扩展占据所有可用空间 */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}