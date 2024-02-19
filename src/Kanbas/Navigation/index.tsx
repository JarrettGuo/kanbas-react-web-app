import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaRegClock,FaArrowRightFromBracket,FaQuestion } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";
import "./index.css";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  const links = [
    { label: "Account", icon: <FaRegUserCircle className={`icon fs-2 ${pathname.includes('/Kanbas/Account') ? "text-danger" : "text-white"}`} />,},
    { label: "Dashboard", icon: <FaTachometerAlt className="icon fs-2 text-danger" /> },
    { label: "Courses", icon: <FaBook className="icon fs-2 text-danger" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="icon fs-2 text-danger" /> },
    { label: "Inbox", icon: <IoMdMail className="icon fs-2 text-danger" /> },
    { label: "History", icon: <FaRegClock className="icon fs-2 text-danger" /> },
    { label: "Studio", icon: <GrCloudComputer className="icon fs-2 text-danger" /> },
    { label: "Commons", icon: <FaArrowRightFromBracket className="icon fs-2 text-danger" /> },
    { label: "Help", icon: <FaQuestion className="icon fs-1 text-danger" /> },
  ];

  return (
    <ul className="wd-kanbas-navigation d-none d-sm-block">
      <li><img src="/images/logo.jpg" alt="logo" className="img-fluid" /></li>
      {links.map((link, index) => (
        <li key={index} className={`nav-item ${pathname.includes(`/Kanbas/${link.label}`) ? "active" : ""}`}>
          <Link to={`/Kanbas/${link.label}`} className="nav-link d-flex flex-column align-items-center justify-content-center">
            {link.icon}
            <span className={`link-text ${pathname.includes(`/Kanbas/${link.label}`) ? "text-danger" : "text-white"}`}>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}