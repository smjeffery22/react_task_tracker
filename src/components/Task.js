import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
	return (
		<div className="task">
			<h3>
				{task.text}
				<FaTimes style={deleteStyle} onClick={() => onDelete(task.id)} />
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

const deleteStyle = {
	color: 'red',
	cursor: 'pointer',
};

export default Task;
