FROM quay.io/keycloak/keycloak:latest

# Enable health and metrics support
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

# Basic configuration
ENV KC_DB=dev-file
ENV KC_FEATURES=docker
ENV KC_HTTP_RELATIVE_PATH=/auth

# Configure proxy settings for Render
ENV KC_PROXY=edge
ENV KC_HOSTNAME_STRICT=false
ENV KC_HOSTNAME_STRICT_HTTPS=false

WORKDIR /opt/keycloak

# Create a new realm and client during startup
COPY realm-config.json /opt/keycloak/data/import/
ENV KC_IMPORT=/opt/keycloak/data/import/realm-config.json

RUN /opt/keycloak/bin/kc.sh build

EXPOSE 8080

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"] 