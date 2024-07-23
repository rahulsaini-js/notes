import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Project</h1>
        <p className="text-lg text-gray-700 mb-8">Explore and share your memories with us!</p>
        <button 
          onClick={toLogin} 
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 mb-8"
        >
          Let's Start
        </button>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About the Developer</h2>
          <p className="text-gray-700 mb-6">
            Hi, I'm <strong>Rahul Saini</strong>, a passionate MERN stack developer. Welcome to my notes app project!
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About the App</h2>
          <p className="text-gray-700 mb-2">
            This is a full-featured notes application where users can:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Create an account and log in.</li>
            <li>Add notes with titles and tags.</li>
            <li>Delete or edit their notes.</li>
            <li>Search through their notes using the search input in the navbar.</li>
          </ul>
          <p className="text-gray-700">
            Start by creating an account or logging in to manage your notes efficiently!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
