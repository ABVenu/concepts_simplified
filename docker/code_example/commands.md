npm install express mongoose body-parser
npm install --save-dev nodemon


docker-compose up --build

#### Stop and remove any previous containers (if any):
docker-compose down

#### Build and start the containers:
docker-compose up --build

#### Check if the containers are running:
docker ps


## Tag 
docker tag node-app your-dockerhub-username/node-app:latest

## Push
docker push your-dockerhub-username/node-app:latest

## Others Pulling and Running
docker pull your-dockerhub-username/node-app:latest
docker run -p 5000:5000 your-dockerhub-username/node-app:latest
