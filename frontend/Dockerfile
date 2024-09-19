# Stage 1: Build the React app using Vite
FROM node:18 as build-stage

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:alpine

# Copy the built files from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to allow access to the app
EXPOSE 8080

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]