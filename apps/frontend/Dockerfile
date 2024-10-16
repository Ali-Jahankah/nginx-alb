# Stage 1: Build the React app using Nx
FROM node:20-alpine as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project and build the frontend app
COPY . .

# Use the Nx build command from your package.json
RUN npm run build:frontend

# Stage 2: Serve the built app
FROM node:20-alpine as production

WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app/dist/apps/frontend /app/frontend

# Install 'serve' to serve the production build
RUN npm install -g serve

# Expose the port for the React app
EXPOSE 3000

# Serve the built frontend app
CMD ["serve", "-s", "frontend", "-l", "3000"]
