import * as React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to BookApp</h1>
      <p className="text-gray-700 mb-6">
        Discover your next favorite book with us! Browse our collection, add
        books to your favorites, and manage your reading list.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Book cards will go here */}
      </div>
    </div>
  );
};

export default HomePage;
