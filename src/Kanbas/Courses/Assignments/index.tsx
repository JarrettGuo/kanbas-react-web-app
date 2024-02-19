import React from "react";
import { FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Database from "../../Database";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import './index.css';

export default function Assignments() {
  const { assignments } = Database;
  const { courseId } = useParams();
  const assignmentList = assignments.filter((assignment) => assignment.course === courseId);
  return (
    <>
      <div className="row main-header pt-4 my-3">
        {/* Search Bar */}
        <div className="col">
          <form>
            <input type="text" className="form-control ms-1" style={{width:'250px'}} id="search-assignment" placeholder="Search for Assignment" />
          </form>
        </div>
        {/* Buttons */}
        <div className="col-auto">
          <button className="btn btn-light btn-outline-dark"><FaPlus /> Group</button>
          <button className="btn btn-danger btn-outline-dark mx-2"><FaPlus /> Assignment</button>
          <button className="btn btn-light btn-outline-dark me-1"><BsThreeDotsVertical /></button>
        </div>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="py-3">
            <FaEllipsisV className="me-2 mb-2" /> <h3 className="d-inline mb-0">Assignments</h3>
            <div className="float-end">
            <span className="total-percentage custom-ellipse me-2">40% of Total</span>
              <FaPlus className="mx-2" /><FaEllipsisV className="ms-2" />
            </div>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item py-4">
                <FaEllipsisV className="me-3" />
                <BiDetail className="text-success me-3"/>
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}