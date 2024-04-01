import { useState } from "react";

function WorkingWithArrays() {
	const API = "http://localhost:4000/a5/todos";
	const [todo, setTodo] = useState({ id: 1 });

	return (
		<div>
			<h3>Working with Arrays</h3>
			<h4>Retrieving Arrays</h4>
			<a className="btn btn-primary" href={API}>
				Get Todos
			</a>
			<h4>Retrieving an Item from an Array by ID</h4>
			<input
				value={todo.id}
				onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
			/>
			<a href={`${API}/${todo.id}`}>Get Todo by ID</a>

			<h3>Filtering Array Items</h3>
			<a href={`${API}?completed=true`}>Get Completed Todos</a>


		</div>
	);
}
export default WorkingWithArrays;
