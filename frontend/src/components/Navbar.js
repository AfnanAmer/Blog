import React from 'react';
import { useKeycloak } from "@react-keycloak/web";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { keycloak } = useKeycloak();
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800 font-bold text-xl">Afnan's Blog</div>
        <div className="space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900 transition duration-300">About</a>
          {keycloak.authenticated ? (
            <button onClick={() => keycloak.logout()} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">Logout</button>
          ) : (
            <button onClick={() => keycloak.login()} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">Login</button>
          )}
          {/* <a href="/create" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">New Blog</a>
          <a onClick={() => keycloak.login()} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">Login</a> */}

        </div>
      </div>
    </nav>
  );
};
export default Navbar; 