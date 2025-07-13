# API Documentation

This document provides comprehensive documentation for all public APIs, functions, and components in the Ubuntu website project.

## Table of Contents

1. [Backend API](#backend-api)
   - [FastAPI Server](#fastapi-server)
   - [Data Models](#data-models)
   - [API Endpoints](#api-endpoints)
2. [Frontend Components](#frontend-components)
   - [Context Providers](#context-providers)
   - [UI Components](#ui-components)
   - [Page Components](#page-components)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)

---

## Backend API

### FastAPI Server

The backend is built with FastAPI and provides RESTful API endpoints for the Ubuntu website.

**File:** `backend/server.py`

#### Server Configuration

```python
# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

#### Environment Variables Required

- `MONGO_URL`: MongoDB connection string
- `DB_NAME`: Database name

### Data Models

#### StatusCheck

**Model for status check records**

```python
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
```

**Properties:**
- `id`: Unique identifier (auto-generated UUID)
- `client_name`: Name of the client making the status check
- `timestamp`: Timestamp of the status check (auto-generated)

#### StatusCheckCreate

**Model for creating new status checks**

```python
class StatusCheckCreate(BaseModel):
    client_name: str
```

**Properties:**
- `client_name`: Name of the client making the status check

### API Endpoints

#### Base URL
All API endpoints are prefixed with `/api`

#### GET `/api/`
**Health check endpoint**

**Response:**
```json
{
  "message": "Hello World"
}
```

**Example:**
```bash
curl http://localhost:8000/api/
```

#### POST `/api/status`
**Create a new status check**

**Request Body:**
```json
{
  "client_name": "example-client"
}
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "client_name": "example-client",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

**Example:**
```bash
curl -X POST http://localhost:8000/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name": "example-client"}'
```

#### GET `/api/status`
**Retrieve all status checks**

**Response:**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "client_name": "example-client",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
]
```

**Example:**
```bash
curl http://localhost:8000/api/status
```

---

## Frontend Components

### Context Providers

#### ThemeContext

**File:** `frontend/src/contexts/ThemeContext.js`

Provides theme management functionality including dark/light mode switching and system preference detection.

**Hook:** `useTheme()`

**Returns:**
```javascript
{
  isDarkMode: boolean,
  toggleTheme: () => void,
  theme: 'dark' | 'light'
}
```

**Usage:**
```javascript
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

**Features:**
- Automatic system preference detection
- Local storage persistence
- Real-time theme switching
- CSS class management for dark mode

### UI Components

#### DarkModeToggle

**File:** `frontend/src/components/DarkModeToggle.js`

A toggle button component for switching between dark and light themes.

**Props:**
- `className` (string, optional): Additional CSS classes

**Usage:**
```javascript
import DarkModeToggle from './components/DarkModeToggle';

function Header() {
  return (
    <header>
      <DarkModeToggle className="ml-4" />
    </header>
  );
}
```

**Features:**
- Animated toggle with sun/moon icons
- Gradient background
- Hover and focus states
- Accessibility support

#### Modal

**File:** `frontend/src/components/Modal.js`

A flexible modal component with multiple variants and configurations.

**Props:**
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal closes
- `title` (string, optional): Modal title
- `children` (node): Modal content
- `size` (string, optional): Modal size ('sm', 'md', 'lg', 'xl', 'full')
- `showCloseButton` (boolean, optional): Show close button (default: true)
- `closeOnOverlayClick` (boolean, optional): Close on overlay click (default: true)
- `closeOnEscape` (boolean, optional): Close on escape key (default: true)
- `className` (string, optional): Additional CSS classes

**Usage:**
```javascript
import Modal from './components/Modal';

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Example Modal"
        size="lg"
      >
        <p>This is modal content</p>
      </Modal>
    </>
  );
}
```

**ConfirmModal Variant:**

**Props:**
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal closes
- `onConfirm` (function): Callback when confirmed
- `title` (string, optional): Modal title (default: 'Confirm Action')
- `message` (string, optional): Confirmation message
- `confirmText` (string, optional): Confirm button text (default: 'Confirm')
- `cancelText` (string, optional): Cancel button text (default: 'Cancel')
- `variant` (string, optional): Button variant ('danger', 'warning', 'success', default)

**Usage:**
```javascript
import { ConfirmModal } from './components/Modal';

function MyComponent() {
  const [showConfirm, setShowConfirm] = useState(false);
  
  const handleDelete = () => {
    // Delete logic here
    console.log('Item deleted');
  };
  
  return (
    <>
      <button onClick={() => setShowConfirm(true)}>
        Delete Item
      </button>
      
      <ConfirmModal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
        title="Delete Item"
        message="Are you sure you want to delete this item?"
        variant="danger"
      />
    </>
  );
}
```

**Features:**
- Portal rendering
- Focus trapping
- Keyboard navigation
- Accessibility support
- Multiple size options
- Confirmation variant

#### LoadingSpinner

**File:** `frontend/src/components/LoadingSpinner.js`

A versatile loading component with multiple variants and configurations.

**Props:**
- `size` (string, optional): Size ('sm', 'md', 'lg', 'xl', default: 'md')
- `color` (string, optional): Color theme ('orange', 'blue', 'green', 'red', 'purple', 'white', default: 'orange')
- `variant` (string, optional): Animation variant ('spinner', 'dots', 'pulse', 'bars', 'ripple', 'gradient', default: 'spinner')
- `className` (string, optional): Additional CSS classes
- `text` (string, optional): Loading text

**Usage:**
```javascript
import LoadingSpinner from './components/LoadingSpinner';

function MyComponent() {
  return (
    <div>
      <LoadingSpinner 
        size="lg" 
        variant="gradient" 
        text="Loading data..." 
      />
    </div>
  );
}
```

**LoadingOverlay Component:**

**Props:**
- `isLoading` (boolean): Controls overlay visibility
- `text` (string, optional): Loading text (default: 'Loading...')
- `variant` (string, optional): Animation variant
- `className` (string, optional): Additional CSS classes

**Usage:**
```javascript
import { LoadingOverlay } from './components/LoadingSpinner';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div>
      <LoadingOverlay 
        isLoading={isLoading} 
        text="Processing..." 
        variant="gradient" 
      />
      {/* Your content */}
    </div>
  );
}
```

**InlineLoader Component:**

**Props:**
- `isLoading` (boolean): Controls loading state
- `children` (node): Content to show when not loading
- `fallback` (node, optional): Custom loading fallback
- `size` (string, optional): Spinner size
- `variant` (string, optional): Animation variant

**Usage:**
```javascript
import { InlineLoader } from './components/LoadingSpinner';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <InlineLoader 
      isLoading={isLoading} 
      size="md" 
      variant="dots"
    >
      <div>Your content here</div>
    </InlineLoader>
  );
}
```

**Features:**
- Multiple animation variants
- Customizable colors and sizes
- Full-page overlay option
- Inline loading wrapper
- Text support

#### ProgressIndicator

**File:** `frontend/src/components/ProgressIndicator.js`

A progress indicator component with linear and circular variants.

**Props:**
- `value` (number, optional): Current progress value (default: 0)
- `max` (number, optional): Maximum value (default: 100)
- `size` (string, optional): Size ('sm', 'md', 'lg', 'xl', default: 'md')
- `variant` (string, optional): Variant ('linear', 'circular', default: 'linear')
- `color` (string, optional): Color theme ('orange', 'blue', 'green', 'red', 'purple', default: 'orange')
- `showValue` (boolean, optional): Show percentage/value (default: true)
- `animated` (boolean, optional): Enable animations (default: true)
- `className` (string, optional): Additional CSS classes

**Usage:**
```javascript
import ProgressIndicator from './components/ProgressIndicator';

function MyComponent() {
  const [progress, setProgress] = useState(0);
  
  return (
    <div>
      <ProgressIndicator 
        value={progress} 
        max={100} 
        variant="circular" 
        size="lg" 
      />
      
      <ProgressIndicator 
        value={progress} 
        max={100} 
        variant="linear" 
        color="blue" 
      />
    </div>
  );
}
```

**RadialProgress Component:**

**Props:**
- `value` (number, optional): Current progress value (default: 0)
- `max` (number, optional): Maximum value (default: 100)
- `size` (number, optional): Size in pixels (default: 120)
- `strokeWidth` (number, optional): Stroke width (default: 8)
- `className` (string, optional): Additional CSS classes

**Usage:**
```javascript
import { RadialProgress } from './components/ProgressIndicator';

function MyComponent() {
  return (
    <RadialProgress 
      value={75} 
      max={100} 
      size={150} 
      strokeWidth={10} 
    />
  );
}
```

**Features:**
- Linear and circular variants
- Smooth animations
- Customizable colors and sizes
- Gradient support
- Value display options

#### Tooltip

**File:** `frontend/src/components/Tooltip.js`

A tooltip component with smart positioning and accessibility features.

**Props:**
- `children` (node): Trigger element
- `content` (string): Tooltip content
- `position` (string, optional): Preferred position ('top', 'bottom', 'left', 'right', default: 'top')
- `delay` (number, optional): Show delay in milliseconds (default: 300)
- `className` (string, optional): Additional CSS classes
- `disabled` (boolean, optional): Disable tooltip (default: false)

**Usage:**
```javascript
import Tooltip from './components/Tooltip';

function MyComponent() {
  return (
    <div>
      <Tooltip content="This is a helpful tooltip" position="bottom">
        <button>Hover me</button>
      </Tooltip>
      
      <Tooltip content="Disabled tooltip" disabled>
        <button>No tooltip</button>
      </Tooltip>
    </div>
  );
}
```

**Features:**
- Smart positioning (auto-adjusts to fit viewport)
- Configurable delay
- Keyboard accessibility
- Smooth animations
- Dark mode support

#### Navigation

**File:** `frontend/src/components/Navigation.js`

The main navigation component with mobile responsiveness and accessibility features.

**Props:** None (uses context and routing internally)

**Usage:**
```javascript
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      {/* Your app content */}
    </div>
  );
}
```

**Features:**
- Mobile-responsive hamburger menu
- Smooth animations
- Keyboard navigation
- Focus management
- Skip links for accessibility
- Dark mode integration
- Active state indicators

### Page Components

The application includes several page components located in `frontend/src/pages/`:

- **Home.js**: Landing page with Ubuntu introduction
- **TryUbuntu.js**: Ubuntu trial and demo page
- **Installation.js**: Installation guide page
- **Software.js**: Software showcase page
- **Community.js**: Community information page
- **WhyUbuntu.js**: Ubuntu benefits and features page

Each page component is a React functional component that renders the respective page content with proper routing integration.

---

## Project Structure

```
├── backend/
│   ├── server.py                 # FastAPI server
│   ├── requirements.txt          # Python dependencies
│   └── external_integrations/    # External service integrations
├── frontend/
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── contexts/             # React contexts
│   │   ├── pages/                # Page components
│   │   ├── App.js                # Main app component
│   │   └── index.js              # App entry point
│   ├── package.json              # Node.js dependencies
│   └── tailwind.config.js        # Tailwind CSS configuration
├── tests/                        # Test files
├── scripts/                      # Build and deployment scripts
├── nginx.conf                    # Nginx configuration
├── Dockerfile                    # Docker configuration
└── README.md                     # Project overview
```

---

## Getting Started

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Set environment variables:**
   ```bash
   export MONGO_URL="your_mongodb_connection_string"
   export DB_NAME="your_database_name"
   ```

3. **Run the server:**
   ```bash
   uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

### Docker Setup

1. **Build and run with Docker:**
   ```bash
   docker build -t ubuntu-website .
   docker run -p 3000:3000 -p 8000:8000 ubuntu-website
   ```

---

## Dependencies

### Backend Dependencies
- **FastAPI**: Modern web framework for building APIs
- **Uvicorn**: ASGI server for running FastAPI
- **Motor**: Async MongoDB driver
- **Pydantic**: Data validation using Python type annotations
- **Python-dotenv**: Environment variable management

### Frontend Dependencies
- **React**: UI library
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **Tailwind CSS**: Utility-first CSS framework

---

## Development Guidelines

### Code Style
- Use TypeScript for better type safety (recommended)
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful component and function names

### Component Guidelines
- Keep components small and focused
- Use proper prop validation
- Implement accessibility features
- Add comprehensive error handling

### API Guidelines
- Use consistent HTTP status codes
- Implement proper error responses
- Add request/response validation
- Document all endpoints

---

## Testing

### Backend Testing
```bash
cd backend
pytest
```

### Frontend Testing
```bash
cd frontend
npm test
```

### E2E Testing
```bash
npx playwright test
```

---

## Deployment

### Production Build
```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
uvicorn server:app --host 0.0.0.0 --port 8000
```

### Environment Variables
Ensure all required environment variables are set in production:
- `MONGO_URL`
- `DB_NAME`
- `NODE_ENV=production`

---

This documentation covers all public APIs, functions, and components in the Ubuntu website project. For additional information or questions, please refer to the individual component files or contact the development team.