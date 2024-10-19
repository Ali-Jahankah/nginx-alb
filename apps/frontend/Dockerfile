FROM node:20-alpine AS development

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build:frontend

FROM node:20-alpine AS production

WORKDIR /app

# Copy the built files from the build stage
COPY --from=development /app/dist/apps/frontend ./

# Install serve globally
RUN npm install -g serve

# Expose the port
EXPOSE 4200

# Start the server
CMD ["serve", "-s", ".", "-l", "4200"]
