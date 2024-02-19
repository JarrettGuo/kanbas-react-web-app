import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Database from "../../../Database";
import { FaCheck,FaPlus } from "react-icons/fa6";

export default function AssignmentEditor() {
  const { assignments } = Database;
  const { assignmentId } = useParams();
  const assignment = assignments.find( (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="flex-fill mx-5 my-4">
        <div className="content">
          {/* head */}
          <div className="hearder clearfix border-1 border-bottom border-gary py-2 pb-4 pe-2 d-flex align-items-center justify-content-end">
          <FaCheck className="text-success"/>
            <span className="text-success me-4 ms-2">Published</span>
            <div className="dropdown">
              <button className="btn dropdown-toggle btn-light btn-outline-dark" type="button" data-bs-toggle="dropdown">
                <i className="fa-solid fa-ellipsis-vertical" />
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Speed Grader</a></li>
                <li><a className="dropdown-item" href="#">Duplicate</a></li>
                <li><a className="dropdown-item" href="#">Delete</a></li>
                <li><a className="dropdown-item" href="#">Move To...</a></li>
                <li><a className="dropdown-item" href="#">Send To...</a></li>
                <li><a className="dropdown-item" href="#">Copy To...</a></li>
                <li><a className="dropdown-item" href="#">Share to commons</a></li>
              </ul>
            </div>
          </div>
          <div className="assignment-main-content">
            {/* content */}
            <div className="my-3">
              <span>Assignment Name</span>
            </div>
            <form className="border-1 border-black border-bottom pb-5">
              <div className="input-group">
              <input value={assignment?.title} className="form-control mb-2" />
              </div>
              <div className="input-group mt-2">
              <textarea
                className="form-control mt-3 p-4"
                rows={3}
                defaultValue={`${assignment?.title}  ID: ${assignment?._id}  Course: ${assignment?.course}`}
              />
              </div>
              <div className="mx-5 px-5">
                <div className="input-group mt-3">
                  <span className="input-group-text no-border">Points</span>
                  <input type="text" className="form-control" defaultValue={100} />
                </div>
                <div className="dropdown dropdown-menu-end mt-3 ms-2 d-flex align-items-center">
                  <span className="btn-group-text me-2">Assignemnt Group</span>
                  <button type="button" className="btn dropdown-toggle btn-light flex-grow-1" data-bs-toggle="dropdown">ASSIGNMENTS</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">link1</a></li>
                    <li><a className="dropdown-item" href="#">link2</a></li>
                    <li><a className="dropdown-item" href="#">link3</a></li>
                  </ul>
                </div>
                <div className="dropdown dropdown-menu-end mt-3 ms-2 d-flex align-items-center">
                  <span className="btn-group-text me-2">Display Grade as</span>
                  <button type="button" className="btn dropdown-toggle btn-light flex-grow-1" data-bs-toggle="dropdown">Percentage</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">link1</a></li>
                    <li><a className="dropdown-item" href="#">link2</a></li>
                    <li><a className="dropdown-item" href="#">link3</a></li>
                  </ul>
                </div>
                <div className="d-flex align-items-start mt-3">
                  <span className="input-group-text no-border assign-part mt-2">Assign</span>
                  <div className="input-group mt-2 align-items-start">
                    <div className="container form-control">
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-1"><strong>Assign to</strong></div>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" defaultValue="Everyone" />
                          </div>
                        </div>                                                            
                        <div className="col-12">
                          <div className="mb-2"><strong>Due</strong></div> 
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" defaultValue="Sun 18. 2023, 11:59 PM" />
                            <span className="input-group-text"><i className="fas fa-calendar-alt" /></span>
                          </div>
                        </div>                                                            
                        <div className="col-6 pe-1">
                          <div className="mb-1"><strong>Available from</strong></div>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" defaultValue="Sun 18. 2023, 11:59 PM" />
                            <span className="input-group-text"><i className="fas fa-calendar-alt" /></span>
                          </div>
                        </div>
                        <div className="col-6 ps-1">
                          <div className="mb-1"><strong>Until</strong></div>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" />
                            <span className="input-group-text"><i className="fas fa-calendar-alt" /></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-100">
                      <button className="btn btn-secondary w-100"><FaPlus className="mb-1" /> Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="footer clearfix">
              <div className="form-check m-3">
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="form-check-label">Notify users that this content has changed</label>
              </div>
              <div className="button-group float-end mb-5 me-3">
              <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
              </button>
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-danger float-end">
                Cancel
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}