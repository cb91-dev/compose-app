## Docker Compose App

### Development Server

To start all services in a development mode you can simply pass this command at the root of project, all services have a hot reload feature, thanks to nodemon and docker volumes. 
    
    docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
 
### Production
Sample production build command, run at the root of this project.

    docker compose up --build
### Front End
The front-end directory contains a React v18 application ready to go along with Material UI v5.15.
#### packages:
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@mui/icons-material": "^5.15.15",
    "@mui/material": "^5.15.15",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.95",
    "@types/react": "^18.2.74",
    "@types/react-dom": "^18.2.24",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "^5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
### Api
Sample api service currently is a using express, mongoose and axios 
#### packages:
    "axios": "^1.6.8",
    "express": "^4.19.2",
    "mongoose": "^8.3.0",
    "nodemon": "^3.1.0"
### Auth
Sample auth service currently is a using express, mongoose and axios
#### packages:
    "axios": "^1.6.8",
    "express": "^4.19.2",
    "mongoose": "^8.3.0",
    "nodemon": "^3.1.0"

### Nginx
To complete this part you will need to update your local host file to the value in nginx.conf.prod