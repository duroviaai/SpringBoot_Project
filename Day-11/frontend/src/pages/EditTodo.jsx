import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTodoById, updateTodo } from '../services/todoService';

export default function EditTodo() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await getTodoById(id);
        setTitle(data.title || '');
        setDescription(data.description || '');
      } catch (err) {
        console.error('Failed to fetch todo:', err);
      }
    };
    fetchTodo();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTodo(id, { title, description });
      navigate('/');
    } catch (err) {
      console.error('Failed to update todo:', err);
    }
  };

  return (
    <div>
      <h1>Edit Todo</h1>
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
        <button type="submit">Update</button>
        &nbsp;
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
}
