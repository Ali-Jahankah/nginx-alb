# Project Description

This project demonstrates a robust and scalable architecture using Docker, Node.js, React, and Nginx. It comprises the following components:

*   **Three Node.js Backend Servers:** Three separate Node.js servers handle backend logic and API requests. This setup allows for horizontal scaling and redundancy. Each server runs in its own Docker container, defined by individual Dockerfiles located in the `apps` directory (e.g., `apps/server1/Dockerfile`, `apps/server2/Dockerfile`, `apps/server3/Dockerfile`). These servers are exposed on ports 4004, 4005, and 4006 respectively within the Docker network.

*   **React Frontend Application:** A React application serves as the user interface. It communicates with the backend servers via API calls. The frontend is also containerized using a Dockerfile located in `apps/frontend/Dockerfile` and exposed on port 4200 within the Docker network.

*   **Nginx Load Balancer:** Nginx acts as a reverse proxy and load balancer, distributing incoming traffic across the three Node.js backend servers. This ensures high availability and prevents service disruption. If one of the backend servers becomes unavailable (e.g., due to a crash or intentional shutdown), Nginx automatically redirects traffic to the remaining healthy servers. This failover mechanism is a key feature of this project. The Nginx configuration is defined in `Dockerfile.nginx`. The Nginx container exposes port 4008 to the host machine, making the application accessible to users.

**Key Features:**

*   **Load Balancing:** Nginx distributes traffic across multiple backend servers, improving performance and availability.
*   **High Availability:** If one backend server fails, Nginx redirects traffic to the remaining servers, ensuring uninterrupted service.
*   **Containerization:** Docker is used to containerize all components, ensuring consistent environments and simplified deployment.
*   **Scalability:** The backend can be easily scaled by adding more Node.js server containers.
*   **Nx Monorepo (Implied):** The presence of `nx build` commands and the structure of the `apps` directory suggests the use of Nx, a monorepo tool, for managing the project's multiple applications.

**Requirements:**

*   Docker installed and running
*   Node.js version >= 20

# Running the project locally

1.  **Clone the repository:**

    ```bash
    git clone [https://your-repository-url.git](https://your-repository-url.git)
    ```

2.  **Build the Docker images:**

    This command builds all the Docker images for your application:

    ```bash
    docker-compose build
    ```

3.  **Run the application:**

    This command starts all the containers defined in your `docker-compose.yml` file:

    ```bash
    docker-compose up
    ```

4.  **Access the application:**

    *   The frontend should be accessible at `http://localhost:4008`.

**Additional Notes:**

*   By default, Nginx is configured to distribute traffic across three Node.js servers running on ports 4004, 4005, and 4006. You can modify these ports in the `docker-compose.yml` file if needed.
*   You can use `docker-compose down` to stop and remove all running containers.

```bash
docker-compose down
