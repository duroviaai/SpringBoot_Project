import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  useEffect(() => { fetchTodos(); }, []);

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
      <h1 className="text-2xl font-bold text-gray-800 mb-5">My Todos</h1>
      {todos.length === 0 ? (
        <p className="text-gray-400 text-sm mt-10 text-center">No todos yet. Create one!</p>
      ) : (
        <div className="border border-gray-200 rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr className="text-gray-500 text-left">
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">TITLE</th>
                <th className="px-4 py-3 font-medium">DESCRIPTION</th>
                <th className="px-4 py-3 font-medium">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {todos.map((todo) => (
                <tr key={todo.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-400">{todo.id}</td>
                  <td className="px-4 py-3 text-gray-800 font-medium">{todo.title}</td>
                  <td className="px-4 py-3 text-gray-500">{todo.description}</td>
                  <td className="px-4 py-3 flex gap-3">
                    <button onClick={() => navigate(`/edit/${todo.id}`)} className="text-blue-600 text-sm cursor-pointer bg-transparent border-none p-0 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(todo.id)} className="text-red-500 text-sm cursor-pointer bg-transparent border-none p-0 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
