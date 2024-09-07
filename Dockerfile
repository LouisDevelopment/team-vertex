# Build stage
FROM node:18 AS build-stage
WORKDIR /team-vertex

RUN npm install
RUN npm run build

# Production stage
FROM node:18 AS production-stage
# Copy the Express app source code
WORKDIR /
RUN npm install

# Expose port and start the Express server
EXPOSE 8080
CMD ["node", "index.js"]