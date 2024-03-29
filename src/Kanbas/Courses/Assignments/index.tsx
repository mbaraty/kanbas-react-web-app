import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
function Assignments() {
	const { courseId } = useParams();
	const assignmentList = db.assignments.filter(
		(assignment) => assignment.course === courseId
	);
	return (
		<div>
			<div>
				<input type="text" placeholder="Search for Assignments" />
				<input type="button" value="Group" />
				<input type="button" value="Assignment" />
				<select>
					<option value="#">Edit Assignment Dates</option>
				</select>
			</div>
			<hr />
			<ul className="list-group wd-modules">
				<li className="list-group-item">
					<div>
						<FaEllipsisV className="me-2" /> ASSIGNMENTS
						<span className="float-end">
							<FaCheckCircle className="text-success" />
							<FaPlusCircle className="ms-2" />
							<FaEllipsisV className="ms-2" />
						</span>
					</div>
					<ul className="list-group">
						{assignmentList.map((assignment) => (
							<li className="list-group-item">
								<FaEllipsisV className="me-2" />
								<Link
									to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
									{assignment.title}
								</Link>
								<span className="float-end">
									<FaCheckCircle className="text-success" />
									<FaEllipsisV className="ms-2" />
								</span>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</div>
	);
}
export default Assignments;
