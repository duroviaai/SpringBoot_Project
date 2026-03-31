import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-lg font-bold text-gray-800 no-underline">
        Todos
      </Link>
      <Link to="/create" className="bg-blue-600 text-white text-sm px-4 py-2 rounded no-underline hover:bg-blue-700">
        + New Todo
      </Link>
    </nav>
  );
}
