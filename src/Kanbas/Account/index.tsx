import Signin from "../../Users/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import UserTable from "../../Users/Table";
import Register from "../../Users/Register";
import Login from "../../Users/Login";
import Profile from "../../Users/profile";
export default function Account() {
	return (
		<div className="container-fluid">
			<Routes>
				<Route path="/" element={<Navigate to="Login" />} />
				<Route path="Register" element={<Register />} />
				<Route path="Profile" element={<Profile />} />
				<Route path="Login" element={<Login />} />
			</Routes>
		</div>
	);
}
