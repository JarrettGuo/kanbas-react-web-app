import { Link, useLocation } from "react-router-dom";
import "./index.css";


export default function CourseNavigation() {
  const links = [
    'Home',
    'Modules',
    'Piazza',
    'ZoomMeetings',
    'Assignments',
    'Grades',
    'People',
    'PanoptoVideo',
    'Discussions',
    'Announcements',
    'Pages',
    'Files',
    'Rubrics',
    'Outcomes',
    'Collaborations',
    'Syllabus',
    'Settings'
];
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation d-none d-lg-block">
  {links.map((link, index) => (
    <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
      <Link to={link}>{link}</Link>
    </li>
  ))}
  </ul>
  );
}
