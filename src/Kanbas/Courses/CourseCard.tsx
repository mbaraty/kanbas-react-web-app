import { Link } from "react-router-dom";
import { courses } from "../Database";

interface CourseCardProps {
	// ChatGPT helped me come up with the interface idea to troubleshoot
	// an error that was caused by the type of the property 'i' below being undefined
	i: string; // or number, depending on your ID type
}

function CourseCard({ i }: CourseCardProps) {
	const course = courses.find((course) => course._id === i);
	if (!course) return null;
	return (
		<div className="card" style={{width: '100%'}}>
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
					style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
					{course.name}
				</Link>
				<p className="card-text">{course.number}</p>
				<Link
					to={`/Kanbas/Courses/${course._id}/Home`}
					className="btn btn-primary">
					Go
				</Link>
			</div>
		</div>
	);
}

export default CourseCard;
