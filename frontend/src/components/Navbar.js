import React from 'react';
import { useKeycloak } from "@react-keycloak/web";
import { Link, useLocation } from 'react-router-dom';
import { handleLogin, handleLogout } from '../Keycloak';

const Navbar = () => {
  const { keycloak } = useKeycloak();
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800 font-bold text-xl">Afnan's Blog</div>
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition duration-300">About</Link>
          {keycloak.authenticated ? (
            <button
              onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => handleLogin(location.pathname)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;