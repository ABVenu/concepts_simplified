
#### **Session Objective**
1. **Practical Experience**: 
   - They’ll learn how Docker works by interacting with a real-world example.
   - Pulling an image, running it, and seeing the app in action helps solidify concepts.

2. **Focus on Key Docker Concepts**:
   - **Image**: Teach them how an image contains everything needed to run the app.
   - **Container**: Explain how a container is a running instance of the image.
   - **Docker Hub**: Show them how Docker Hub is like a “code repository” for Docker images.

3. **Minimal Setup**:
   - Students don’t need to set up Node.js, MongoDB, or dependencies on their local machines.
   - They can focus solely on Docker concepts instead of debugging environment issues.

4. **Encourages Exploration**:
   - Once they get the app running, you can encourage them to explore the Dockerfile, learn about `docker-compose.yml`, and understand the app's structure.

---

#### **1. Introduction to Docker Concepts**
- **What is Docker?**
  - Explain containers and images in simple terms (e.g., "a container is like a sandboxed environment").
- **Why Use Docker?**
  - Mention use cases (e.g., consistency, ease of sharing, lightweight virtualization).
- **Key Terms**: 
  - Image, Container, Dockerfile, Docker Hub.

---

#### **2. Overview of the App**
- **Explain the App**: 
  - A simple Node.js app with two routes:
    - `/users` for managing users.
    - `/todos` for managing todos.
  - MongoDB as the database.
- Show the folder structure of the app (briefly).
- Mention that the app has already been "Dockerized" (Dockerfile + docker-compose.yml).

---

#### **3. Demonstration: Pushing the Docker Image (10 mins)**
- Build the Docker image:
  ```bash
  docker build -t your-dockerhub-username/node-todos-app .
  ```
- Tag the image:
  ```bash
  docker tag your-dockerhub-username/node-todos-app your-dockerhub-username/node-todos-app:1.0
  ```
- Push the image to Docker Hub:
  ```bash
  docker push your-dockerhub-username/node-todos-app:1.0
  ```

---

#### **4. Hands-On: Students Pull and Run the App**
**Step 1**: Pull the image.
- Ask students to run:
  ```bash
  docker pull your-dockerhub-username/node-todos-app:1.0
  ```

**Step 2**: Run the container.
- Have them run the container:
  ```bash
  docker run -d -p 3000:3000 your-dockerhub-username/node-todos-app:1.0
  ```
- Open `http://localhost:3000` to see the app running.

---

#### **5. Explore Docker Commands**
- **Check Running Containers**:
  ```bash
  docker ps
  ```
- **Stop the Container**:
  ```bash
  docker stop <container_id>
  ```
- **Restart the Container**:
  ```bash
  docker start <container_id>
  ```
- **Inspect Logs**:
  ```bash
  docker logs <container_id>
  ```

---

#### **6. Wrap-Up and Next Steps**
- **Explain the Workflow**:
  - How Docker lets them run the app without worrying about dependencies.
  - How it works consistently across different machines.
- **Encourage Exploration**:
  - Look at the `Dockerfile` and `docker-compose.yml`.
  - Modify the app locally, rebuild the image, and push it.
- **Introduce Advanced Topics** (optional for future sessions):
  - Multi-container setups (e.g., app + database using `docker-compose`).
  - Networking in Docker.

---

### **Bonus: Tips for a Successful Session**
1. **Keep It Simple**: Avoid overwhelming students with advanced topics like multi-stage builds or custom networks.
2. **Pre-Prepare the App**: Ensure the app, Dockerfile, and docker-compose.yml work smoothly before the session.
3. **Test the Workflow**: Try the pull and run process on a fresh machine to mimic a student's experience.
4. **Interactive**: Let students run the commands themselves; they’ll learn better by doing.
5. **Error Handling**: Be ready to troubleshoot common issues (e.g., Docker not running, port conflicts).

---

