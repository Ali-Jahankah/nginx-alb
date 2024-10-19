FROM node:20-alpine AS development

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:server3

FROM node:20-alpine AS production


WORKDIR /app

COPY --from=development /app/dist/apps/server3 ./

# Install production dependencies as root
RUN npm install --only=production

# Now switch to the non-root user
USER node
ENV PORT=4006

CMD ["node", "main"]
