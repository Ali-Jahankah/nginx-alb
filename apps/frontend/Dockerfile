# Stage 1: Build stage
FROM node:20-alpine as development

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project and build the frontend app
COPY . .
RUN npm run build:frontend

# Stage 2: Serve the built app
FROM node:20-alpine as production

WORKDIR /app

# Copy the built files from the build stage
COPY --from=development /app/dist/apps/frontend ./

# Install serve globally
RUN npm install -g serve

# Expose the port
EXPOSE 4200

# Start the server
CMD ["serve", "-s", ".", "-l", "4200"]
