import ModuleList from "../Modules/List";

function Home() {
	return (
		<div className="d-flex">
			<div className="flex-fill">
				<ModuleList />
			</div>
			<div
				className="flex-grow-0 me-2 d-none d-lg-block"
				style={{ width: 250 }}>
				<h3>Course Status</h3>
				<div className="input-group">
					<button className="btn btn-light btn-outline-dark">Unpublish</button>
					<button className="btn btn-success btn-outline-dark">
						Published
					</button>
				</div>
				<button className="btn btn-light btn-outline-dark">
					Import Existing Content
				</button>
				<button className="btn btn-light btn-outline-dark">
					Import from Commons
				</button>
				<button className="btn btn-light btn-outline-dark">
					Choose Home Page
				</button>
				<button className="btn btn-light btn-outline-dark">
					View Course Stream
				</button>
				<button className="btn btn-light btn-outline-dark">
					New Announcement
				</button>
				<button className="btn btn-light btn-outline-dark">
					New Analytics
				</button>
				<button className="btn btn-light btn-outline-dark">
					View Course Notifications
				</button>

				<h5>To Do:</h5>
				<hr />
				<ul className="list-group">
					<li className="list-group-item">
						<a href="#">Placeholder</a>
					</li>
				</ul>

				<span>
					<h5>Coming Up</h5>
					<hr />
					<a href="#">View Calendar</a>
				</span>
			</div>
		</div>
	);
}

export default Home;
