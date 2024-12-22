import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TaskList.css';

const TaskList = ({ token }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [time, setTime] = useState('');
    const [completedTasks, setCompletedTasks] = useState(new Set()); // Track completed tasks

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/tasks', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setTasks(response.data.sort((a, b) => new Date(a.time) - new Date(b.time))); // Sort tasks by time
            } catch (error) {
                console.error('Error fetching tasks:', error.message);
            }
        };

        fetchTasks();
    }, [token]);

    const addTask = async () => {
        const currentDateTime = new Date().toISOString();
        if (time < currentDateTime) {
            alert('You cannot select a time in the past.');
            return;
        }

        try {
            await axios.post(
                'http://localhost:5000/api/tasks',
                { title: newTask, time },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNewTask('');
            setTime('');
            const response = await axios.get('http://localhost:5000/api/tasks', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setTasks(response.data.sort((a, b) => new Date(a.time) - new Date(b.time))); // Update and sort tasks
        } catch (error) {
            console.error('Error adding task:', error.message);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setTasks(tasks.filter((task) => task.id !== id)); // Remove the task from the list
            setCompletedTasks((prev) => {
                const newSet = new Set(prev);
                newSet.delete(id); // Remove the task from completed if it was marked as done
                return newSet;
            });
        } catch (error) {
            console.error('Error deleting task:', error.message);
        }
    };

    const markTaskDone = (id) => {
        setCompletedTasks((prev) => new Set(prev).add(id)); // Mark task as completed
    };

    return (
        <div className="task-container">
            <div className="task-input-box">
                <h3>Add New Task</h3>
                <input
                    type="text"
                    placeholder="Task title"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    required
                />
                <input
                    type="datetime-local"
                    value={time}
                    min={new Date().toISOString().slice(0, 16)}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                <button className="btn btn-primary" onClick={addTask}>
                    Add Task
                </button>
            </div>
            <div className="task-list-box">
                <h3>Your Tasks</h3>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <span>
                                <strong>{task.title}</strong> - {new Date(task.time).toLocaleString()}
                            </span>
                            <div className="task-actions">
                                {completedTasks.has(task.id) ? (
                                    <span className="task-done">&#10003;</span> // Tick mark for completed tasks
                                ) : (
                                    <button
                                        className="btn btn-done"
                                        onClick={() => markTaskDone(task.id)}
                                    >
                                        Done
                                    </button>
                                )}
                                <button
                                    className="btn btn-delete"
                                    onClick={() => deleteTask(task.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
