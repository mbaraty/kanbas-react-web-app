import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import CourseCard from "./CourseCard";
function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4">
          {courses.map((course) => (
            <div className="col">
            <CourseCard i={course._id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;