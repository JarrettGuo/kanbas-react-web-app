import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

// Kanbas 组件
function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: "", // Add _id property
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "course.jpg", // Add image property
  });

  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString(), image: "course.jpg" }]);
    alert(`Course added successfully!`);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
    alert(`Course deleted successfully!`);
  };

  const updateCourse = () => {
    let isUpdated = false;
    const updatedCourses = courses.map((c) => {
      if (c._id === course._id) {
        isUpdated = true;
        return course;
      } else {
        return c;
      }
    });
  
    setCourses(updatedCourses);
  
    if (isUpdated) {
      alert(`Course updated successfully!`);
    } else {
      alert(`Course added successfully!`);
    }
  };  

  return (
    <Provider store={store}>
    <div className="d-flex" style={{ height: '100vh' }}> {/* 确保整体布局占满整个屏幕高度 */}
      <KanbasNavigation/> {/* KanbasNavigation 会在小屏幕尺寸下隐藏 */}
      <div style={{ flexGrow: 1 }}> {/* 保证这个 div 在 KanbasNavigation 隐藏时扩展占据所有可用空间 */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}

export default Kanbas;