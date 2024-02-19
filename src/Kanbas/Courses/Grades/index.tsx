import Database from "../../Database";
import { useParams } from "react-router-dom";
import { CiSearch,CiFilter } from "react-icons/ci";
import { MdInput,MdOutlineOutput } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export default function Grades() {
  const { assignments, enrollments, grades, users } = Database;
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="mt-5 me-3">
      <div>
        <div className="header d-flex flex-row-reverse">
          <button className="btn btn-light btn-outline-dark"><IoMdSettings /></button>
          <button className="btn btn-light btn-outline-dark mx-2 dropdown-toggle" data-bs-toggle="dropdown"><MdOutlineOutput /> Export</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">link1</a></li>
            <li><a className="dropdown-item" href="#">link2</a></li>
            <li><a className="dropdown-item" href="#">link3</a></li>
          </ul>
          <button className="btn btn-light btn-outline-dark"><MdInput /> Import</button>
        </div>
        <div className="search">
          <div className="row">
            <div className="col-6">
              <div><strong>Student Names</strong></div>
              <div className="input-group my-2">
                <span className="input-group-text">
                <CiSearch />
                </span>
                <input type="text" className="form-control" placeholder="Search Students" />
              </div>
            </div>                               
            <div className="col-6">
              <div><strong>Assignment Names</strong></div>
              <div className="input-group my-2">
                <span className="input-group-text">
                <CiSearch />
                </span>
                <input type="text" className="form-control" placeholder="Search Assignments" />
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-light btn-outline-dark my-4"><CiFilter /> Apply Filters</button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover text-center table-bordered">
          <thead>
            <th className="py-2 border-1">Student Name</th>
            {as.map((assignment) => (<th className="py-2 border-1">{assignment.title}</th>))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user?.firstName} {user?.lastName}</td>
                   {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                      return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
