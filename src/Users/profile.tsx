import React, { useState, useEffect } from "react";
import * as userClient from "./client";
import { useNavigate, Link } from "react-router-dom";
import UserTable from "./Table";

export default function Profile() {
	const navigate = useNavigate();
	const [profile, setProfile] = useState<any>({
		_id: "",
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		role: "",
	});
	const fetchUser = async () => {
		const user = await userClient.profile();

		setProfile(user);
	};
	const logout = async () => {
		await userClient.logout();
		navigate("/Kanbas/Account/Login");
	};
	const updateUser = async () => {
		await userClient.updateUser(profile);
	};
	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<div>
			<h1>Profile</h1>
			{profile && (
				<div>
					<input
						value={profile.username}
						onChange={(e) =>
							setProfile({ ...profile, username: e.target.value })
						}
					/>
					<br />{" "}
					<input
						value={profile.password}
						onChange={(e) =>
							setProfile({ ...profile, password: e.target.value })
						}
					/>
					<br />{" "}
					<input
						value={profile.firstName}
						onChange={(e) =>
							setProfile({ ...profile, firstName: e.target.value })
						}
					/>
					<br />{" "}
					<input
						value={profile.lastName}
						onChange={(e) =>
							setProfile({ ...profile, lastName: e.target.value })
						}
					/>
					<br />{" "}
					<input
						value={profile.dob}
						type="date"
						onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
					/>
					<br />{" "}
					<input
						value={profile.email}
						onChange={(e) => setProfile({ ...profile, email: e.target.value })}
					/>
					<br />{" "}
					<select
						onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
						<option value="USER">User</option>
						<option value="ADMIN">Admin</option>
						<option value="FACULTY">Faculty</option>
						<option value="STUDENT">Student</option>
					</select>
					<button onClick={updateUser}>Save</button>
					<button onClick={logout}>Signout</button>
				</div>
			)}
			{profile.role === "ADMIN" && <UserTable />}
		</div>
	);
}
