# Build the Vue.js app
FROM node:18 AS build-stage
WORKDIR /app
COPY ./vue-app/ .
RUN npm install
RUN npm run build

# Set up the Express server
FROM node:18 AS production-stage
WORKDIR /app
COPY --from=build-stage /app/dist ./dist
COPY ./express-app/ .
RUN npm install --production

# Expose port and start the server
EXPOSE 8080
CMD ["node", "index.js"]