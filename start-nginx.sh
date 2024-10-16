#!/bin/sh

# Create directories for SSL certificates if they don't exist
mkdir -p /etc/ssl/certs
mkdir -p /etc/ssl/private

# Write the SSL certificate from environment variable
echo "$SSL_CERT" > /etc/ssl/certs/fullchain.pem

# Write the private key from environment variable
echo "$SSL_KEY" > /etc/ssl/private/privkey.pem

# Start Nginx
nginx -g 'daemon off;'
