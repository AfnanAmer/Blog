import React from 'react';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import CreateBlog from './components/CreateBlog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function App() {
  // Add initialization options
  const initOptions = {
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256'
  }

  // Handle Keycloak events
  const handleOnEvent = (event, error) => {
    console.log('onKeycloakEvent', event, error);
  }

  const handleTokens = (tokens) => {
    console.log('onKeycloakTokens', tokens);
  }

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={initOptions}
      onEvent={handleOnEvent}
      onTokens={handleTokens}
    >
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/create" element={<PrivateRoute><CreateBlog/></PrivateRoute>} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;
