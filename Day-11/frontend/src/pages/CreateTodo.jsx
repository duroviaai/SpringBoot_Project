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
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Description</label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Create</button>
        &nbsp;
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
}
