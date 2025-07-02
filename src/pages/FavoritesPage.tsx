import * as React from "react";
const FavoritesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Favorites</h1>
      <p className="text-gray-700 mb-6">
        Here you can view and manage your favorite books.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Favorite book cards will go here */}
      </div>
    </div>
  );
};

export default FavoritesPage;
