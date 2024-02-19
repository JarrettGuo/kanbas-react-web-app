import React from 'react'
import { MdOutlinePublishedWithChanges,MdOutlineUnpublished,MdOutput } from "react-icons/md";
import { LuFileInput } from "react-icons/lu";
import { AiOutlineAim } from "react-icons/ai";
import { IoBarChart } from "react-icons/io5";
import { FaBullhorn } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import "./index.css";

export default function Status() {
  return (
    <div className="RightPart float-start mt-4 pt-2 d-none d-lg-block">
        {/* course status */}
        <div className="course-status me-4">
            <h4>Course Status</h4>
          <div className="btn-roup mb-2">
            <button type="button" className="btn btn-light btn-outline-dark right-button__Unpublish" style={{fontSize:'15px'}}><MdOutlineUnpublished/>Unpublish</button>
            <button type="button" className="btn btn-success btn-outline-dark right-button__Published" style={{fontSize:'15px'}}><MdOutlinePublishedWithChanges />Published</button>
          </div>
          <div className="btn-group-vertical">
                {/* Update buttons with flex alignment for vertical centering */}
                <button className="btn btn-light btn-outline-secondary mb-1">
                    <a href="#" className="text-decoration-none text-muted align-items-center d-flex" style={{fontSize:'15px'}}><LuFileInput />&nbsp;Import Existing Content</a>
                </button>
                <button className="btn btn-light btn-outline-secondary mb-1">
                    <a href="#" className="text-decoration-none text-muted align-items-center d-flex" style={{fontSize:'15px'}}><MdOutput/>&nbsp;Import From Commons</a>
                </button>
                <button className="btn btn-light btn-outline-secondary mb-1">
                    <a href="#" className="text-decoration-none text-muted align-items-center d-flex" style={{fontSize:'15px'}}><AiOutlineAim />&nbsp;Choose Home Page</a>
                </button>
                <button className="btn btn-light btn-outline-secondary mb-1">
                    <a href="#" className="text-decoration-none text-muted align-items-center d-flex" style={{fontSize:'15px'}}><IoBarChart />&nbsp;View Course Stream</a>
                </button>
                <button className="btn btn-light btn-outline-secondary mb-1">
                    <a href="#" className="text-decoration-none text-muted align-items-center d-flex" style={{fontSize:'15px'}}><FaBullhorn />&nbsp;New Announcement</a>
                </button>
                <button className="btn btn-light btn-outline-secondary mb-1">
                    <a href="#" className="text-decoration-none text-muted align-items-center d-flex" style={{fontSize:'15px'}}><IoBarChart />&nbsp;New Analytics</a>
                </button>
                <button className="btn btn-light btn-outline-secondary mb-1">
                    <a href="#" className="text-decoration-none text-muted align-items-center d-flex" style={{fontSize:'15px'}}><GoBell />&nbsp;View Notifications</a>
                </button>
            </div>
        </div>
        {/* To do */}
        <div className="to-do mt-3 me-3">
        <h5>To Do</h5>
          <div className="to-do-message clearfix">
            <i className="fas fa-comment-dots float-start mt-1" />
            <span className="float-start ms-2 message"><a href="#" className="text-decoration-none text-danger">Grade A1 - ENV + HTML</a><br />
              <small className="text-secondary">100 points Sep 18 at 11:59pm</small>
            </span>
            <i className="fas fa-times float-end" />
          </div>
        </div>
        {/* Comming Up */}
        <div className="coming-up mt-4 clearfix me-3">
        <h5>Coming Up</h5>
          <a href="#" className="float-end text-danger text-decoration-none mt-2"><SlCalender /> View Calendar</a>
          <br /><hr />
          <div className="coming-up-message clearfix">
          <div className='float-start me-1 text-danger'>
            <SlCalender />
            </div>
            <span className="text-danger float-start message">Lecture <br />
              <small className="text-secondary">CS4550.12631.202410</small><br />
              <small className="text-secondary">Sep 11 at 11:45am</small>
            </span>
            <i className="fas fa-times float-end" />
          </div>
          <div className="coming-up-message mt-3 clearfix">
          <div className='float-start me-1 text-danger'>
            <SlCalender />
            </div>
            <span className="text-danger float-start message">CS5610 06 SP23 Lecture <br />
              <small className="text-secondary">CS5610.12631.202410</small><br />
              <small className="text-secondary">Sep 11 at 11:45am</small>
            </span>
            <i className="fas fa-times float-end" />
          </div>
          <div className="coming-up-message mt-3 clearfix">
            <div className='float-start me-1 text-danger'>
            <SlCalender />
            </div>
            <span className="text-danger float-start message">CS5610 Web Development <br />
              <small className="text-secondary">CS5610.12631.202410</small><br />
              <small className="text-secondary">Sep 11 at 11:45am</small>
            </span>
            <i className="fas fa-times float-end" />
          </div>
          <div className="more-message mt-3">
            <span>
              <a href="#" className="text-danger text-decoration-none message">12 more in the next week...</a>
            </span>
          </div>
        </div>
      </div>
  )
}
