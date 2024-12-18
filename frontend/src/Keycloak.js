import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "myrealm",
  clientId: "my-react-app",
});

export const handleLogin = (currentPath) => {
  keycloak.login({
    redirectUri: `${window.location.origin}${currentPath || ''}`,
    prompt: 'login'
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