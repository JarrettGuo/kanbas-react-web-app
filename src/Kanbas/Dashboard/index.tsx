import React from "react";
import { Link } from "react-router-dom";
import Database from "../Database";
import "./index.css";

export default function Dashboard() {
  const courses = Database.courses;
  return (
    <div className="p-4 kanbas-navigation">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
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
                    {`${course.number} ${course.name}`} </Link>
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