import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../services/todoService';

export default function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTodo({ title, description });
      navigate('/');
    } catch (err) {
      console.error('Failed to create todo:', err);
    }
  };

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">New Todo</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter a title"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Optional description"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700">
            Create
          </button>
          <button type="button" onClick={() => navigate('/')} className="text-sm text-gray-500 cursor-pointer bg-transparent border-none p-0 hover:text-gray-700">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
