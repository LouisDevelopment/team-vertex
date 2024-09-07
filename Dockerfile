# Build stage
FROM node:18 AS build-stage
WORKDIR /app

# Copy and install Vue.js dependencies
COPY /app/team-vertex/package*.json ./
RUN npm install

# Copy the Vue.js app source and build it
COPY /app/team-vertex/ ./
RUN npm run build

# Production stage
FROM node:18 AS production-stage
WORKDIR /app

# Copy the built Vue.js app from the build stage
COPY --from=build-stage /app/team-vertex/dist ./dist

# Copy the Express app source code
WORKDIR /app
RUN npm install

# Expose port and start the Express server
EXPOSE 8080
CMD ["node", "index.js"]