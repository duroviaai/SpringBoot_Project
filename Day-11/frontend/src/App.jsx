import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import CreateTodo from './pages/CreateTodo';
import EditTodo from './pages/EditTodo';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
}
