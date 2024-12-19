FROM quay.io/keycloak/keycloak:latest

WORKDIR /opt/keycloak

# Copy realm config
COPY realm-config.json /opt/keycloak/data/import/realm.json

# Build optimized for production
RUN /opt/keycloak/bin/kc.sh build

# Production configurations
ENV KC_DB=dev-file
ENV KC_FEATURES=docker
ENV KC_HTTP_RELATIVE_PATH=/auth
ENV KC_PROXY=edge
ENV KC_HOSTNAME_STRICT=false
ENV KC_HOSTNAME_STRICT_HTTPS=false
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

EXPOSE 8080

# Start command for production
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start", "--import-realm", "--hostname-strict=false"]