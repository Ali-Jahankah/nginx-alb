# Development stage
FROM node:20-alpine AS development

WORKDIR /app

# Copy the root package.json and install all dependencies
COPY package.json ./
RUN npm install

# Copy the entire source code
COPY . .

# Build the frontend application
RUN npm run build:frontend

# Production stage
FROM node:20-alpine AS production
ENV NODE_ENV=production

WORKDIR /app

# Copy only the build output from the development stage
COPY --from=development /app/dist/apps/frontend ./build

# Serve the built app using npx
CMD ["npx", "serve", "-s", "build", "-l", "4200"]
