# Step 1: Use the official Node.js image as the base image
FROM node:18 AS build

# Step 2: Set the working directory for the build process
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Step 4: Install the dependencies for both the Express and Vue.js apps
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Build the Vue.js app
WORKDIR /app/team-vertex
RUN npm install
RUN npm run build

# Step 7: Prepare the final image
FROM node:18

# Step 8: Set the working directory for the final image
WORKDIR /app

# Step 9: Copy the Express app code and built Vue.js app assets from the build stage
COPY --from=build /app /app

# Step 10: Expose the port that the Express app will listen on
EXPOSE 8080

# Step 11: Set the environment variable for the port
ENV PORT=8080

# Step 12: Run the Express app
CMD ["node", "index.js"]