import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAllTodos, deleteTodo } from '../services/todoService';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const fetchTodos = async () => {
    try {
      const data = await getAllTodos();
      setTodos(data);
    } catch (err) {
      console.error('Failed to fetch todos:', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      await fetchTodos();
    } catch (err) {
      console.error('Failed to delete todo:', err);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Link to="/create">+ Create Todo</Link>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                <button onClick={() => navigate(`/edit/${todo.id}`)}>Edit</button>
                &nbsp;
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
