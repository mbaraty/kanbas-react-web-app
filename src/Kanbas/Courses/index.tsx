import {
	Navigate,
	Route,
	Routes,
	useLocation,
	useParams,
	Link,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { FaBars } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import Assignments from "./Assignments";
import axios from "axios";
import { useState, useEffect } from "react";

function Courses() {
	const { courseId } = useParams();

	const COURSES_API = "http://localhost:4000/api/courses";
	const [course, setCourse] = useState<any>({ _id: "" });
	const findCourseById = async (courseId?: string) => {
		const response = await axios.get(`${COURSES_API}/${courseId}`);
		setCourse(response.data);
	};

	  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


	const location = useLocation();
	const segments = location.pathname.split("/");
	const lastSegment = segments.pop();

	return (
		<div>
			<div className="container-fluid d-md-none bg-dark text-light">
				<div className="d-flex justify-content-between p-2">
					<Link
						to="/Kanbas/Navigation/"
						className="d-block d-md-none text-light">
						<FaBars></FaBars>
					</Link>
					<div className="d-block d-md-none text-light">
						{course?.name} {">"} {lastSegment}{" "}
					</div>
					<Link
						to="/Kanbas/Courses/Navigation"
						className="d-block d-md-none text-light">
						<FaChevronRight />
					</Link>
				</div>
			</div>

			<div className="d-none d-md-block">
				<h2>
					<HiMiniBars3 /> {course?.name} {">"} {lastSegment}{" "}
				</h2>
			</div>

			<div className="d-flex">
				<div className="wd-navigation d-none d-md-block">
					<CourseNavigation />
				</div>

				<div
					className="overflow-y-scroll flex-grow-1 align-top"
					style={{ top: "50px" }}>
					<Routes>
						<Route path="/" element={<Navigate to="Home" />} />
						<Route path="Home" element={<Home />} />
						<Route path="Modules" element={<Modules />} />
						<Route path="Piazza" element={<h1>Piazza</h1>} />
						<Route path="Assignments" element={<Assignments />} />
						<Route
							path="Assignments/:assignmentId"
							element={<h1>Assignment Editor</h1>}
						/>
						<Route path="Grades" element={<h1>Grades</h1>} />
						<Route path="Quizzes" element={<h1>Quizzes</h1>} />
						<Route path="Zoom" element={<h1>Zoom</h1>} />
						<Route path="People" element={<h1>People</h1>} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default Courses;
