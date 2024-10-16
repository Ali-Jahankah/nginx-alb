FROM node:20-alpine as development

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:server2

FROM node:20-alpine as production
ENV NODE_ENV=production
ENV PORT=4005
EXPOSE ${PORT}

WORKDIR /app

# Copy the built application from the development stage
COPY --from=development /app/dist/apps/server2 ./

# Change ownership of files in /app
RUN chown -R node:node /app

# Switch to the non-root user (node)
USER node

RUN npm install --only=production

CMD ["node", "main"]
