import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div
			className={`task ${task.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => onToggle(task.id)}
		>
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
