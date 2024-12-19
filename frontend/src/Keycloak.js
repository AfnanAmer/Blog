import Keycloak from "keycloak-js";



// Try with direct configuration first to test
const keycloak = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,  // or your actual Keycloak server URL
  realm: process.env.REACT_APP_KEYCLOAK_REALM,              // your realm name
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID           // your client ID
});

export const handleLogin = (currentPath) => {
  console.log('Current path:', currentPath);
  const redirectUri = `${window.location.origin}${currentPath || ''}`;
  console.log('Redirect URI:', redirectUri);
  
  keycloak.login({
    redirectUri: redirectUri,
    prompt: 'login'
  }).catch(error => {
    console.error('Login error:', error);
  });
};

export const handleLogout = () => {
  const baseUrl = window.location.origin;
  keycloak.logout({ 
    redirectUri: baseUrl,
    prompt: 'logout'
  });
};

export default keycloak;