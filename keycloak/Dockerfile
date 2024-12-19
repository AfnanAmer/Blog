FROM quay.io/keycloak/keycloak:latest

WORKDIR /opt/keycloak

# Create a new realm and client during startup
COPY realm-config.json /opt/keycloak/data/import/
ENV KC_IMPORT=/opt/keycloak/data/import/realm-config.json

RUN /opt/keycloak/bin/kc.sh build

EXPOSE 8080