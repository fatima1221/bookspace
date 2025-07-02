import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">📚 BookApp</Link>
      </div>

      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Favorites
        </Link>
        <Link
          to="/login"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
