import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard({
	courses,
	course,
	setCourse,
	addNewCourse,
	deleteCourse,
	updateCourse,
}: {
	courses: any[];
	course: any;
	setCourse: (course: any) => void;
	addNewCourse: () => void;
	deleteCourse: (course: any) => void;
	updateCourse: () => void;
}) {
	return (
		<div className="p-4">
			<h1>Dashboard</h1> <hr />
			<input
				value={course.name}
				className="form-control"
				onChange={(e) => setCourse({ ...course, name: e.target.value })}
			/>
			<input
				value={course.number}
				className="form-control"
				onChange={(e) => setCourse({ ...course, number: e.target.value })}
			/>
			<input
				value={course.startDate}
				className="form-control"
				type="date"
				onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
			/>
			<input
				value={course.endDate}
				className="form-control"
				type="date"
				onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
			/>
			<button onClick={addNewCourse}> Add </button>
			<button onClick={updateCourse}>Update</button>
			<h2>Published Courses ({courses.length})</h2> <hr />
			<div className="row">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-l-4 row-cols-xl-6 g-4">
					{courses.map((course) => (
						<div className="col">
							<div className="card" >
								<img
									src={`/images/${course.image}`}
									className="card-img-top"
									style={{ height: 150 }}
									alt={course.name}
								/>
								<div className="card-body">
									<Link
										className="card-title"
										to={`/Kanbas/Courses/${course._id}/Home`}
										style={{
											textDecoration: "none",
											color: "navy",
											fontWeight: "bold",
										}}>
										{course.name}
									</Link>
									<p className="card-text">{course.number}</p>
									<Link
										to={`/Kanbas/Courses/${course._id}/Home`}
										className="btn btn-primary">
										Go
									</Link>
									<button
										onClick={(event) => {
											event.preventDefault();
											deleteCourse(course._id);
										}}>
										Delete
									</button>

									<button
										onClick={(event) => {
											event.preventDefault();
											setCourse(course);
										}}>
										Edit
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
