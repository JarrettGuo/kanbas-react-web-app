import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState("/Labs/a3"); 

  useEffect(() => {
    if (pathname.includes("a1") || pathname.includes("a2") || pathname.includes("a3") || pathname.includes("Kanbas") || pathname.includes("hello")) {
      setActivePath(pathname);
    }
  }, [pathname]);

  return (
    <nav className="nav nav-tabs mt-2">
      <Link to="/Labs/a1"
            className={`nav-link ${activePath.includes("a1") ? "active" : ""}`}>A1</Link>
      <Link to="/Labs/a2"
            className={`nav-link ${activePath.includes("a2") ? "active" : ""}`}>A2</Link>
      <Link to="/Labs/a3"
            className={`nav-link ${activePath.includes("a3") ? "active" : ""}`}>A3</Link>
      <Link to="/Kanbas"
            className={`nav-link ${activePath.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
      <Link to="/hello"
            className={`nav-link ${activePath.includes("hello") ? "active" : ""}`}>Hello</Link>
    </nav>
  );
}
