import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {useState} from "react";

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: { courses: any[], course: any, setCourse: any, addNewCourse: any, deleteCourse: any, updateCourse: any }) {
  const [showAddCourse, setShowAddCourse] = useState(false);
  return (
    <div className="p-4 kanbas-navigation ">
      <div className="border-gary border-bottom pb-2">
        <div className="clearfix">
          <h1 className="float-start">Dashboard</h1>
          <button className="btn btn-danger float-end" onClick={()=>setShowAddCourse(false)}>Cancel</button>
          <button className="btn btn-primary mx-2 float-end" onClick={()=>setShowAddCourse(true)}>Add New Course</button>
        </div>
        {showAddCourse && (
          <div >
            <h5>Course</h5>
            <input value={course.name} className="form-control mt-2"
                  onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control mt-2"
                  onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control mt-2" type="date"
                  onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control mt-2" type="date"
                  onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <div className="mt-2">
              <button className="btn btn-primary" onClick={addNewCourse} >
                Add
              </button>
              <button className="btn btn-success mx-2" onClick={updateCourse}>
                Updata
              </button>
              <button className="btn btn-danger" onClick={()=>setShowAddCourse(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      <h2 className="clearfix border-gary border-bottom pb-2 py-4">Published Courses ({courses.length})</h2>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }} alt="course-information"/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {`${course.number} ${course.name}`} 
                    <br />
                    <button className="btn btn-primary btn-sm" onClick={(event) => {setShowAddCourse(true);event.preventDefault();setCourse(course);}}>
                      Edit
                    </button>
                    <button className="btn btn-danger mx-2 btn-sm" onClick={(event) => {
                      event.preventDefault();
                      const isConfirmed = window.confirm(`Are you sure you want to delete ${course.name}?`);
                      if (isConfirmed) {deleteCourse(course._id);}}}>
                      Delete
                    </button>
                    <button className="btn btn-success btn-sm" onClick={updateCourse} >
                      Update
                    </button>
                  </Link>
                  <p className="card-text">{`${course._id} From ${course.startDate} to ${course.endDate}`}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}