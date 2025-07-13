# Quick Reference Guide

This guide provides quick access to common usage patterns, code snippets, and reference information for the Ubuntu website project.

## Table of Contents

1. [Backend API Quick Reference](#backend-api-quick-reference)
2. [Frontend Components Quick Reference](#frontend-components-quick-reference)
3. [Common Patterns](#common-patterns)
4. [Environment Setup](#environment-setup)
5. [Development Commands](#development-commands)

---

## Backend API Quick Reference

### Server Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/api/` | Health check | - | `{"message": "Hello World"}` |
| POST | `/api/status` | Create status check | `{"client_name": "string"}` | `StatusCheck` object |
| GET | `/api/status` | Get all status checks | - | Array of `StatusCheck` objects |

### Data Models

```python
# StatusCheck Model
{
  "id": "uuid-string",
  "client_name": "string",
  "timestamp": "2024-01-15T10:30:00.000Z"
}

# StatusCheckCreate Model
{
  "client_name": "string"
}
```

### Example API Calls

```bash
# Health check
curl http://localhost:8000/api/

# Create status check
curl -X POST http://localhost:8000/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name": "my-app"}'

# Get all status checks
curl http://localhost:8000/api/status
```

---

## Frontend Components Quick Reference

### Theme Management

```javascript
// Using theme context
import { useTheme } from './contexts/ThemeContext';

function MyComponent() {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

### Modal Usage

```javascript
// Basic modal
import Modal from './components/Modal';

const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
  <p>Modal content here</p>
</Modal>

// Confirmation modal
import { ConfirmModal } from './components/Modal';

<ConfirmModal
  isOpen={showConfirm}
  onClose={() => setShowConfirm(false)}
  onConfirm={handleDelete}
  title="Delete Item"
  message="Are you sure?"
  variant="danger"
/>
```

### Loading States

```javascript
// Basic spinner
import LoadingSpinner from './components/LoadingSpinner';

<LoadingSpinner size="lg" variant="gradient" text="Loading..." />

// Full page overlay
import { LoadingOverlay } from './components/LoadingSpinner';

<LoadingOverlay isLoading={isLoading} text="Processing..." />

// Inline loader
import { InlineLoader } from './components/LoadingSpinner';

<InlineLoader isLoading={isLoading}>
  <div>Your content</div>
</InlineLoader>
```

### Progress Indicators

```javascript
// Linear progress
import ProgressIndicator from './components/ProgressIndicator';

<ProgressIndicator value={75} max={100} variant="linear" color="blue" />

// Circular progress
<ProgressIndicator value={75} max={100} variant="circular" size="lg" />

// Radial progress
import { RadialProgress } from './components/ProgressIndicator';

<RadialProgress value={75} max={100} size={150} strokeWidth={10} />
```

### Tooltips

```javascript
import Tooltip from './components/Tooltip';

<Tooltip content="Helpful information" position="bottom" delay={500}>
  <button>Hover me</button>
</Tooltip>
```

### Dark Mode Toggle

```javascript
import DarkModeToggle from './components/DarkModeToggle';

<DarkModeToggle className="ml-4" />
```

---

## Common Patterns

### Component with Loading State

```javascript
function DataComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{/* Render data */}</div>;
}
```

### Form with Validation

```javascript
function MyForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    
    if (Object.keys(newErrors).length === 0) {
      // Submit form
      submitForm(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className={errors.name ? 'border-red-500' : ''}
      />
      {errors.name && <span className="text-red-500">{errors.name}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

### API Call with Error Handling

```javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
```

### Responsive Design Pattern

```javascript
function ResponsiveComponent() {
  return (
    <div className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-3 
      gap-4 
      p-4
    ">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        Content 1
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        Content 2
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        Content 3
      </div>
    </div>
  );
}
```

### Custom Hook Pattern

```javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

---

## Environment Setup

### Backend Environment Variables

```bash
# .env file
MONGO_URL=mongodb://localhost:27017/ubuntu-website
DB_NAME=ubuntu-website
NODE_ENV=development
```

### Frontend Environment Variables

```bash
# .env file
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_ENV=development
```

### Required Dependencies

**Backend:**
```bash
pip install fastapi uvicorn motor pydantic python-dotenv
```

**Frontend:**
```bash
npm install react react-dom react-router-dom axios
npm install -D tailwindcss postcss autoprefixer
```

---

## Development Commands

### Backend Commands

```bash
# Install dependencies
cd backend
pip install -r requirements.txt

# Run development server
uvicorn server:app --reload --host 0.0.0.0 --port 8000

# Run tests
pytest

# Format code
black .
isort .

# Lint code
flake8 .
mypy .
```

### Frontend Commands

```bash
# Install dependencies
cd frontend
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Eject from Create React App
npm run eject
```

### Docker Commands

```bash
# Build image
docker build -t ubuntu-website .

# Run container
docker run -p 3000:3000 -p 8000:8000 ubuntu-website

# Run in detached mode
docker run -d -p 3000:3000 -p 8000:8000 ubuntu-website

# View logs
docker logs <container-id>

# Stop container
docker stop <container-id>
```

---

## CSS Classes Reference

### Common Utility Classes

```css
/* Layout */
.flex, .grid, .block, .inline-block
.justify-center, .justify-between, .justify-end
.items-center, .items-start, .items-end
.space-x-4, .space-y-4

/* Spacing */
.p-4, .px-4, .py-4, .pt-4, .pb-4, .pl-4, .pr-4
.m-4, .mx-4, .my-4, .mt-4, .mb-4, .ml-4, .mr-4

/* Colors */
.text-white, .text-gray-900, .text-orange-600
.bg-white, .bg-gray-900, .bg-orange-600
.border-gray-200, .border-orange-500

/* Dark mode */
.dark:text-white, .dark:bg-gray-900
.dark:border-gray-700

/* Responsive */
.sm:text-lg, .md:text-xl, .lg:text-2xl
.sm:grid-cols-1, .md:grid-cols-2, .lg:grid-cols-3

/* Animations */
.transition-all, .duration-300, .ease-in-out
.hover:scale-105, .active:scale-95
.animate-spin, .animate-pulse, .animate-bounce
```

### Component-Specific Classes

```css
/* Modal */
.fixed inset-0 z-50 flex items-center justify-center
.bg-black/50 backdrop-blur-sm
.max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl

/* Navigation */
.fixed top-0 left-0 right-0 z-50
.nav-glass shadow-lg
.hamburger-menu

/* Loading Spinner */
.animate-spin
.animate-pulse
.animate-ping

/* Progress Bar */
.bg-gradient-to-r from-orange-500 to-red-600
.animate-shimmer
```

---

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure backend CORS middleware is configured
   - Check frontend API URL configuration

2. **Theme Not Persisting**
   - Check localStorage permissions
   - Verify ThemeProvider is wrapping the app

3. **Modal Not Rendering**
   - Ensure modal is rendered in a portal
   - Check z-index values

4. **Loading States Not Working**
   - Verify isLoading prop is boolean
   - Check component mounting/unmounting

5. **Responsive Design Issues**
   - Check Tailwind breakpoint configuration
   - Verify viewport meta tag

### Debug Tips

```javascript
// Debug theme state
console.log('Theme state:', { isDarkMode, theme });

// Debug API calls
console.log('API response:', response);

// Debug component props
console.log('Component props:', props);

// Debug localStorage
console.log('localStorage:', localStorage.getItem('theme'));
```

---

This quick reference guide provides essential information for developers working on the Ubuntu website project. For detailed documentation, refer to the main API and Component documentation files.