# MERNskeleton
Skeleton structure of a MERN application - frontend and backend with a MongoDB instance


### Install instructions

Backend - 
1. Clone the repo and run `cd backend` and do an `npm install` 
2. Create a .env file in the root of the backend file and create a PORT variable for the port to run on, and MONGO_URI with the mongoDB connection string
3. The run command is `npm run dev` which will run nodemon to listen for any backend changes
4. If the server runs successfully, there will be a "connected to DB & server ready at http://localhost:PORT


Frontend - 
1. The project is built with Vite and React v18 is installed 
2. React Router is installed and imported in the App.js file 
3. `cd frontend` and run `npm install`
4. `npm run dev` to run the frontend
5. Frontend has a proxy defined to bypass CORS errors during development

 
