FROM node:20-alpine AS development

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:server3

FROM node:20-alpine AS production
ENV NODE_ENV=production
ENV PORT=4006
EXPOSE ${PORT}

WORKDIR /app

COPY --from=development /app/dist/apps/server3 ./

# Install production dependencies as root
RUN npm install --only=production

# Now switch to the non-root user
USER node

CMD ["node", "main"]
