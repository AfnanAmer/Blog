FROM quay.io/keycloak/keycloak:latest

WORKDIR /opt/keycloak

# Copy realm config
COPY realm-config.json /opt/keycloak/data/import/realm.json

# Build optimized for production
RUN /opt/keycloak/bin/kc.sh build

# Production configurations
ENV KC_DB=dev-file \
    KC_FEATURES=docker \
    KC_HTTP_RELATIVE_PATH=/auth \
    KC_PROXY=edge \
    KC_HOSTNAME_STRICT=false \
    KC_HOSTNAME_STRICT_HTTPS=false \
    KEYCLOAK_ADMIN=${KEYCLOAK_ADMIN} \
    KEYCLOAK_ADMIN_PASSWORD=${KEYCLOAK_ADMIN_PASSWORD} \
    KC_HTTP_PORT=8080 \
    PORT=8080

EXPOSE 8080

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start", "--import-realm", "--hostname-strict=false"]