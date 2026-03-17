# Addition Calculator - Full Stack Application

A simple full-stack addition calculator built with Spring Boot (Backend) and React + Vite (Frontend).

## Project Structure
```
Addition/
├── Backend/           # Spring Boot REST API
│   ├── src/
│   ├── pom.xml
│   └── run-backend.bat
├── frontend/          # React + Vite application
│   ├── src/
│   ├── package.json
│   └── run-frontend.bat
└── README.md
```

## Features
- Clean and responsive UI
- Real-time addition calculation
- Error handling and validation
- Loading states
- Reset functionality
- CORS enabled for cross-origin requests

## Prerequisites
- Java 25 (JDK installed at: C:\Users\HP\Downloads\jdk-25_windows-x64_bin\jdk-25.0.2)
- Node.js and pnpm
- Maven (included via wrapper)

## Quick Start

### Option 1: Using Batch Files (Recommended)

1. **Start Backend:**
   ```bash
   cd Backend
   run-backend.bat
   ```

2. **Start Frontend:**
   ```bash
   cd frontend
   run-frontend.bat
   ```

### Option 2: Manual Commands

1. **Backend (Port 1313):**
   ```bash
   cd Backend
   set JAVA_HOME=C:\Users\HP\Downloads\jdk-25_windows-x64_bin\jdk-25.0.2
   mvnw.cmd spring-boot:run
   ```

2. **Frontend (Port 5173):**
   ```bash
   cd frontend
   pnpm install  # First time only
   pnpm dev
   ```

## API Endpoints

- `GET /` - Health check
- `GET /add?a={num1}&b={num2}` - Addition operation

### Example Response:
```json
{
  "num1": 5,
  "num2": 3,
  "result": 8
}
```

## Configuration

### Backend (application.properties)
```properties
server.port=1313
```

### Frontend
- Development server: http://localhost:5173
- API calls to: http://localhost:1313

## Troubleshooting

1. **Backend won't start:**
   - Ensure Java 25 is installed
   - Check if port 1313 is available
   - Verify JAVA_HOME is set correctly

2. **Frontend can't connect:**
   - Ensure backend is running on port 1313
   - Check browser console for CORS errors
   - Verify axios is installed: `pnpm install axios`

3. **CORS Issues:**
   - Backend includes `@CrossOrigin(origins = "http://localhost:5173")`
   - Restart backend after any changes

## Technology Stack

**Backend:**
- Spring Boot 3.2.0
- Java 25
- Maven
- Embedded Tomcat

**Frontend:**
- React 19.2.4
- Vite 8.0.0
- Axios 1.13.6
- Modern ES6+ JavaScript

## Development

The application supports hot reloading:
- Backend: Restart required for changes
- Frontend: Automatic reload on file changes

Access the application at: http://localhost:5173/