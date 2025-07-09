# Ubuntu Guide Webapp

This project is a web application designed to provide users with comprehensive information and resources about the Ubuntu operating system. It features sections on trying Ubuntu, installation, available software, community resources, and reasons to choose Ubuntu.

The application is built with a React frontend and a Python (FastAPI) backend.

## Tech Stack

This project utilizes the following technologies:

*   **Frontend:**
    *   React
    *   React Router for navigation
    *   Tailwind CSS (likely, given `tailwind.config.js` and `postcss.config.js`)
    *   Yarn (for package management, based on `yarn.lock`)
*   **Backend:**
    *   Python
    *   FastAPI (web framework)
    *   Uvicorn (ASGI server)
    *   MongoDB (database, via `motor`)
*   **Serving & Deployment:**
    *   Nginx (web server and reverse proxy)
    *   Docker (containerization)

## Project Structure

The project is organized into two main directories:

*   `frontend/`: Contains the React application.
    *   `public/`: Static assets and `index.html`.
    *   `src/`: React components, pages, and application logic.
        *   `components/`: Reusable UI components.
        *   `pages/`: Top-level page components corresponding to different routes.
    *   `package.json`: Project dependencies and scripts for the frontend.
    *   `yarn.lock`: Exact versions of frontend dependencies.
*   `backend/`: Contains the Python FastAPI application.
    *   `server.py`: The main FastAPI application file, defining API endpoints and logic.
    *   `requirements.txt`: Python dependencies for the backend.
    *   `.env`: (Should be created from `.env.example`) for backend environment variables like database connection strings.

Other important files and directories:

*   `Dockerfile`: Defines the multi-stage Docker build for creating a production image.
*   `nginx.conf`: Nginx configuration for serving the frontend and proxying API requests.
*   `entrypoint.sh`: Script used by Docker to start the backend and Nginx services.
*   `.devcontainer/`: Contains configuration for VS Code Dev Containers, allowing for a consistent development environment.
*   `scripts/`: Contains utility scripts, such as `update-and-start.sh` for managing local development services.

## Local Development Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Set up Environment Variables:**
    *   **Backend:**
        *   Navigate to the `backend` directory: `cd backend`
        *   Copy the example environment file: `cp .env.example .env`
        *   Edit `.env` and fill in your MongoDB connection details (`MONGO_URL`, `DB_NAME`).
        *   Return to the root directory: `cd ..`
    *   **Frontend:**
        *   Navigate to the `frontend` directory: `cd frontend`
        *   Create a `.env` file: `touch .env`
        *   Add any necessary frontend environment variables. For example, to specify the API endpoint for development:
            ```
            REACT_APP_API_URL=http://localhost:8001/api
            ```
            (Note: The `Dockerfile` uses a `FRONTEND_ENV` build argument which is translated into the `.env` file during the Docker build. For local development, you'll manage this `frontend/.env` file directly.)
        *   Return to the root directory: `cd ..`

3.  **Install Dependencies:**
    *   **Backend:**
        ```bash
        cd backend
        pip install -r requirements.txt
        # Or, if you prefer using Poetry (ensure Poetry is installed):
        # poetry install
        cd ..
        ```
    *   **Frontend:**
        ```bash
        cd frontend
        yarn install # or npm install
        cd ..
        ```

4.  **Run the Development Servers:**
    *   **Backend (in one terminal):**
        ```bash
        cd backend
        uvicorn server:app --reload --port 8001
        ```
        The backend API will be available at `http://localhost:8001`.
    *   **Frontend (in another terminal):**
        ```bash
        cd frontend
        yarn start # or npm start
        ```
        The frontend application will be available at `http://localhost:3000` and will proxy API requests to the backend if your frontend code is set up to use `REACT_APP_API_URL`.

5.  **Alternative: Using `scripts/update-and-start.sh` (Advanced):**
    If you have `supervisorctl` and `poetry` installed and configured in your environment (e.g., within a dev container or a specific VM setup), you might be able to use the `scripts/update-and-start.sh` script. This script handles dependency installation and service management using Supervisor.
    ```bash
    ./scripts/update-and-start.sh
    ```
    This is generally more suited for environments that mirror the `.devcontainer` setup.

Remember to have a MongoDB instance running and accessible for the backend to connect to.

## Dockerized Production Setup

This project is configured to be built and run using Docker. This is the recommended way to deploy the application in a production-like environment.

1.  **Ensure Docker is installed** on your system.

2.  **Build the Docker Image:**
    Navigate to the root directory of the project and run:
    ```bash
    docker build -t ubuntu-guide-webapp .
    ```
    *   **Frontend Environment Variables:** The `Dockerfile` accepts a build argument `FRONTEND_ENV` to set environment variables for the frontend at build time. These variables are written to `frontend/.env` within the image. For example, to set the API URL:
        ```bash
        docker build --build-arg FRONTEND_ENV="REACT_APP_API_URL=http://yourdomain.com/api" -t ubuntu-guide-webapp .
        ```
        If `FRONTEND_ENV` is not provided, an empty `frontend/.env` file will be created.

3.  **Run the Docker Container:**
    Once the image is built, you can run it as a container:
    ```bash
    docker run -p 8080:8080 -d --name ubuntu-guide ubuntu-guide-webapp
    ```
    This command will:
    *   Run the container in detached mode (`-d`).
    *   Map port `8080` of the host to port `8080` of the container (Nginx listens on port 8080 as per `nginx.conf`).
    *   Name the container `ubuntu-guide` for easier management.

    You will need to ensure that the backend (running inside the container) can connect to your MongoDB instance. The MongoDB URL for the backend is configured via environment variables passed to the `docker run` command. These are *runtime* environment variables for the backend service within the container.

    For example, if your backend's `.env` file (which you'd typically manage outside Docker for production or use Docker secrets/configs) requires `MONGO_URL` and `DB_NAME`:
    ```bash
    docker run -p 8080:8080 -d \
          -e MONGO_URL="your_mongodb_connection_string" \
          -e DB_NAME="your_database_name" \
          --name ubuntu-guide ubuntu-guide-webapp
    ```
    **Note:** The `backend/.env` file from your local setup is *not* automatically copied into the backend directory in the final Docker image stage for security and flexibility. Runtime configuration should be supplied as shown above.

4.  **Access the Application:**
    The application should be accessible at `http://localhost:8080` (or your server's IP/domain on port 8080).

5.  **Stopping the container:**
    ```bash
    docker stop ubuntu-guide
    ```

6.  **Viewing logs:**
    ```bash
    docker logs ubuntu-guide
    ```

## API Endpoints

The backend exposes the following API endpoints, prefixed with `/api`:

*   **`GET /api/`**
    *   Description: Root endpoint for the API.
    *   Response: Simple greeting message.
    ```json
    {
      "message": "Hello World"
    }
    ```

*   **`POST /api/status`**
    *   Description: Creates a status check entry.
    *   Request Body:
        ```json
        {
          "client_name": "string"
        }
        ```
    *   Response: The created status check object.
        ```json
        {
          "id": "string (uuid)",
          "client_name": "string",
          "timestamp": "string (datetime)"
        }
        ```

*   **`GET /api/status`**
    *   Description: Retrieves a list of status check entries.
    *   Response: A list of status check objects.
        ```json
        [
          {
            "id": "string (uuid)",
            "client_name": "string",
            "timestamp": "string (datetime)"
          }
        ]
        ```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name # For new features
    git checkout -b fix/your-bug-fix-name   # For bug fixes
    ```
3.  **Make your changes** and commit them with clear, descriptive messages.
4.  **Ensure your code adheres to existing styling** and practices.
5.  **If adding new features, consider adding relevant tests.**
6.  **Push your changes** to your forked repository.
7.  **Create a Pull Request (PR)** to the main repository's `main` branch (or the appropriate development branch).
    *   Provide a clear title and description for your PR, explaining the changes you've made.

We'll review your PR as soon as possible.

## License

This project is currently not licensed.
