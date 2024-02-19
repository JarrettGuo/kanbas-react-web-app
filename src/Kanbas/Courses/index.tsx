import { useState, useEffect } from 'react';
import Database from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { FaGlasses } from "react-icons/fa";

export default function Courses() {
  const courses = Database.courses;
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation();

  const [showNavigation, setShowNavigation] = useState(true);
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768 && window.innerWidth < 992);
  const [isSmScreen, setIsSmScreen] = useState(window.innerWidth < 768);
  // 处理点击事件的函数，用于切换导航的显示状态
  const toggleNavigation = () => setShowNavigation(!showNavigation);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768 && window.innerWidth < 992);
      setIsSmScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update navigation visibility based on screen size
  useEffect(() => {
    if (isMdScreen || isSmScreen) {
      setShowNavigation(false);
    } else {
      setShowNavigation(true);
    }
  }, [isMdScreen, isSmScreen]);
  // Adjust content style based on navigation visibility
  const contentStyle = {
    left: showNavigation ? "250px" : "90px",
    top: "65px",
  };

  // 解析当前路径来获取相应的标题
  const getPageTitle = (pathname:string) => {
    const pathParts = pathname.split('/').filter(Boolean); // 移除空字符串
    const currentPage = pathParts[pathParts.length - 1]; // 获取最后一部分作为当前页面

    switch (currentPage) {
      case 'Home':
        return 'Home';
      case 'Modules':
        return 'Modules';
      case 'Assignments':
        return 'Assignments';
      case 'Grades':
        return 'Grades';
      case 'Piazza':
        return 'Piazza';
      case 'ZoomMeetings':
        return 'Zoom Meetings';
      case 'People':
        return 'People';
      case 'PanoptoVideo':
        return 'Panopto Video';
      case 'Discussions':
        return 'Discussions';
      case 'Announcements':
        return 'Announcements';
      case 'Pages':
        return 'Pages';
      case 'Files':
        return 'Files';
      case 'Rubrics':
        return 'Rubrics';
      case 'Outcomes':
        return 'Outcomes';
      case 'Collaborations':
        return 'Collaborations';
      case 'Syllabus':
        return 'Syllabus';
      case 'Settings':
        return 'Settings';
      default:
        return '';
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="kanbas-course">
      <div className="clearfix p-2 border-1 border-gary border-bottom py-2">
        <h1 className="text-danger float-start" style={{fontSize:"30px"}}>
          <button className='btn btn-light text-danger' onClick={toggleNavigation}><HiMiniBars3 /></button>
          &nbsp;&nbsp;{course?.number}.{course?.name}
          <span style={{ color: 'black', fontSize: '25px' }}> {pageTitle && ` > ${pageTitle}`}</span>
        </h1>
        <div className="text-center">
          <button className="btn btn-light border-1 border-black float-end"><FaGlasses />&nbsp;Student View</button>
        </div>
      </div>
      {showNavigation && <CourseNavigation />}
      <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={contentStyle}>
        <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="ZoomMeetings" element={<h1>Zoom Meetings</h1>} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
              <Route path="Grades" element={<Grades/>} />
              <Route path="People" element={<h1>People</h1>} />
              <Route path="PanoptoVideo" element={<h1>Panopto Video</h1>} />
              <Route path="Discussions" element={<h1>Discussions</h1>} />
              <Route path="Announcements" element={<h1>Announcements</h1>} />
              <Route path="Pages" element={<h1>Pages</h1>} />
              <Route path="Files" element={<h1>Files</h1>} />
              <Route path="Rubrics" element={<h1>Rubrics</h1>} />
              <Route path="Outcomes" element={<h1>Outcomes</h1>} />
              <Route path="Collaborations" element={<h1>Collaborations</h1>} />
              <Route path="Syllabus" element={<h1>Syllabus</h1>} />
              <Route path="Settings" element={<h1>Settings</h1>} />
              </Routes>
      </div>
    </div>
    );
  }
  