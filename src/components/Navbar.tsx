import * as React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          Book Space
        </a>
        <div>
          <a href="/login" className="mr-4 hover:underline">
            Login
          </a>
          <a href="/register" className="hover:underline">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
