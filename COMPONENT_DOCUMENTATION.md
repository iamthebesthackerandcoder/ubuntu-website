# Component Documentation

This document provides detailed JSDoc-style documentation for all React components in the Ubuntu website project.

## Table of Contents

1. [Context Providers](#context-providers)
2. [UI Components](#ui-components)
3. [Page Components](#page-components)
4. [Component Patterns](#component-patterns)

---

## Context Providers

### ThemeContext

**File:** `frontend/src/contexts/ThemeContext.js`

A React context provider that manages theme state across the application, including dark/light mode switching and system preference detection.

#### ThemeProvider

```javascript
/**
 * Theme provider component that wraps the application and provides theme context
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 * @returns {JSX.Element} Theme provider wrapper
 */
export const ThemeProvider = ({ children }) => {
  // Implementation details...
}
```

**Props:**
- `children` (React.ReactNode): Child components to wrap with theme context

**Usage:**
```javascript
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        {/* Your app content */}
      </div>
    </ThemeProvider>
  );
}
```

#### useTheme Hook

```javascript
/**
 * Custom hook to access theme context
 * @returns {Object} Theme context object
 * @returns {boolean} returns.isDarkMode - Current dark mode state
 * @returns {Function} returns.toggleTheme - Function to toggle theme
 * @returns {string} returns.theme - Current theme ('dark' | 'light')
 * @throws {Error} When used outside of ThemeProvider
 */
export const useTheme = () => {
  // Implementation details...
}
```

**Returns:**
- `isDarkMode` (boolean): Current dark mode state
- `toggleTheme` (function): Function to toggle between dark and light themes
- `theme` (string): Current theme string ('dark' or 'light')

**Usage:**
```javascript
import { useTheme } from './contexts/ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
    >
      Switch to {isDarkMode ? 'light' : 'dark'} mode
    </button>
  );
}
```

**Features:**
- Automatic system preference detection using `prefers-color-scheme` media query
- Local storage persistence for user preferences
- Real-time theme switching with CSS class management
- Fallback to system preference when no user preference is set

---

## UI Components

### DarkModeToggle

**File:** `frontend/src/components/DarkModeToggle.js`

A toggle button component for switching between dark and light themes with animated sun/moon icons.

```javascript
/**
 * Dark mode toggle button component
 * @param {Object} props - Component props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element} Toggle button component
 */
const DarkModeToggle = ({ className = '' }) => {
  // Implementation details...
}
```

**Props:**
- `className` (string, optional): Additional CSS classes to apply to the toggle button

**Usage:**
```javascript
import DarkModeToggle from './components/DarkModeToggle';

function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1>Ubuntu Website</h1>
      <DarkModeToggle className="ml-4" />
    </header>
  );
}
```

**Features:**
- Animated toggle with smooth transitions
- Sun (☀️) and moon (🌙) icons that change based on theme
- Gradient background that changes with theme
- Hover and focus states for accessibility
- ARIA labels for screen readers

**CSS Classes Applied:**
- Base: `relative inline-flex items-center justify-center w-12 h-6 rounded-full`
- Dark mode: `bg-gradient-to-r from-purple-600 to-blue-600`
- Light mode: `bg-gradient-to-r from-orange-400 to-yellow-400`
- Interactive: `hover:scale-105 active:scale-95`

### Modal

**File:** `frontend/src/components/Modal.js`

A flexible modal component with multiple variants, sizes, and accessibility features.

```javascript
/**
 * Modal component for displaying overlay content
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {Function} props.onClose - Callback when modal closes
 * @param {string} [props.title] - Modal title
 * @param {React.ReactNode} props.children - Modal content
 * @param {string} [props.size='md'] - Modal size ('sm', 'md', 'lg', 'xl', 'full')
 * @param {boolean} [props.showCloseButton=true] - Show close button
 * @param {boolean} [props.closeOnOverlayClick=true] - Close on overlay click
 * @param {boolean} [props.closeOnEscape=true] - Close on escape key
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element|null} Modal component or null if not open
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = ''
}) => {
  // Implementation details...
}
```

**Props:**
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback function called when modal closes
- `title` (string, optional): Modal title displayed in header
- `children` (React.ReactNode): Modal content
- `size` (string, optional): Modal size - 'sm', 'md', 'lg', 'xl', 'full' (default: 'md')
- `showCloseButton` (boolean, optional): Show close button in header (default: true)
- `closeOnOverlayClick` (boolean, optional): Close modal when clicking overlay (default: true)
- `closeOnEscape` (boolean, optional): Close modal when pressing Escape key (default: true)
- `className` (string, optional): Additional CSS classes

**Usage:**
```javascript
import Modal from './components/Modal';

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleClose = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>
      
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        title="Example Modal"
        size="lg"
        closeOnOverlayClick={true}
        closeOnEscape={true}
      >
        <div className="space-y-4">
          <p>This is the modal content.</p>
          <button 
            onClick={handleClose}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
```

**Size Options:**
- `sm`: `max-w-md` (384px)
- `md`: `max-w-2xl` (672px) - default
- `lg`: `max-w-4xl` (896px)
- `xl`: `max-w-6xl` (1152px)
- `full`: `max-w-full mx-4` (full width with margins)

**Features:**
- Portal rendering to document body
- Focus trapping within modal
- Keyboard navigation support
- ARIA attributes for accessibility
- Smooth animations with CSS transitions
- Backdrop blur effect
- Multiple size options

#### ConfirmModal

```javascript
/**
 * Confirmation modal variant with predefined layout
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {Function} props.onClose - Callback when modal closes
 * @param {Function} props.onConfirm - Callback when confirmed
 * @param {string} [props.title='Confirm Action'] - Modal title
 * @param {string} [props.message='Are you sure you want to proceed?'] - Confirmation message
 * @param {string} [props.confirmText='Confirm'] - Confirm button text
 * @param {string} [props.cancelText='Cancel'] - Cancel button text
 * @param {string} [props.variant] - Button variant ('danger', 'warning', 'success')
 * @returns {JSX.Element} Confirmation modal
 */
export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger'
}) => {
  // Implementation details...
}
```

**Props:**
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal closes
- `onConfirm` (function): Callback when user confirms action
- `title` (string, optional): Modal title (default: 'Confirm Action')
- `message` (string, optional): Confirmation message (default: 'Are you sure you want to proceed?')
- `confirmText` (string, optional): Confirm button text (default: 'Confirm')
- `cancelText` (string, optional): Cancel button text (default: 'Cancel')
- `variant` (string, optional): Button variant - 'danger', 'warning', 'success' (default: 'danger')

**Usage:**
```javascript
import { ConfirmModal } from './components/Modal';

function DeleteButton() {
  const [showConfirm, setShowConfirm] = useState(false);
  
  const handleDelete = () => {
    // Delete logic here
    console.log('Item deleted');
  };
  
  return (
    <>
      <button 
        onClick={() => setShowConfirm(true)}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Delete Item
      </button>
      
      <ConfirmModal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
        title="Delete Item"
        message="Are you sure you want to delete this item? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />
    </>
  );
}
```

**Variant Colors:**
- `danger`: Red theme (`bg-red-600 hover:bg-red-700`)
- `warning`: Yellow theme (`bg-yellow-600 hover:bg-yellow-700`)
- `success`: Green theme (`bg-green-600 hover:bg-green-700`)

### LoadingSpinner

**File:** `frontend/src/components/LoadingSpinner.js`

A versatile loading component with multiple animation variants, sizes, and color themes.

```javascript
/**
 * Loading spinner component with multiple variants
 * @param {Object} props - Component props
 * @param {string} [props.size='md'] - Size ('sm', 'md', 'lg', 'xl')
 * @param {string} [props.color='orange'] - Color theme ('orange', 'blue', 'green', 'red', 'purple', 'white')
 * @param {string} [props.variant='spinner'] - Animation variant ('spinner', 'dots', 'pulse', 'bars', 'ripple', 'gradient')
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.text=''] - Loading text to display
 * @returns {JSX.Element} Loading spinner component
 */
const LoadingSpinner = ({ 
  size = 'md', 
  color = 'orange', 
  variant = 'spinner',
  className = '',
  text = ''
}) => {
  // Implementation details...
}
```

**Props:**
- `size` (string, optional): Size - 'sm', 'md', 'lg', 'xl' (default: 'md')
- `color` (string, optional): Color theme - 'orange', 'blue', 'green', 'red', 'purple', 'white' (default: 'orange')
- `variant` (string, optional): Animation variant - 'spinner', 'dots', 'pulse', 'bars', 'ripple', 'gradient' (default: 'spinner')
- `className` (string, optional): Additional CSS classes
- `text` (string, optional): Loading text to display below spinner

**Usage:**
```javascript
import LoadingSpinner from './components/LoadingSpinner';

function LoadingExample() {
  return (
    <div className="space-y-8">
      {/* Basic spinner */}
      <LoadingSpinner />
      
      {/* Large gradient spinner with text */}
      <LoadingSpinner 
        size="lg" 
        variant="gradient" 
        text="Loading data..." 
      />
      
      {/* Small blue dots */}
      <LoadingSpinner 
        size="sm" 
        color="blue" 
        variant="dots" 
      />
      
      {/* Extra large pulse */}
      <LoadingSpinner 
        size="xl" 
        color="purple" 
        variant="pulse" 
      />
    </div>
  );
}
```

**Size Classes:**
- `sm`: `w-4 h-4` (16px)
- `md`: `w-8 h-8` (32px) - default
- `lg`: `w-12 h-12` (48px)
- `xl`: `w-16 h-16` (64px)

**Color Classes:**
- `orange`: `text-orange-600` (default)
- `blue`: `text-blue-600`
- `green`: `text-green-600`
- `red`: `text-red-600`
- `purple`: `text-purple-600`
- `white`: `text-white`

**Animation Variants:**
1. **spinner**: Rotating circle with gradient
2. **dots**: Three pulsing dots with staggered animation
3. **pulse**: Single pulsing circle
4. **bars**: Four animated bars with staggered timing
5. **ripple**: Two concentric circles with ping animation
6. **gradient**: Gradient circle with rotating animation

#### LoadingOverlay

```javascript
/**
 * Full-page loading overlay component
 * @param {Object} props - Component props
 * @param {boolean} props.isLoading - Controls overlay visibility
 * @param {string} [props.text='Loading...'] - Loading text
 * @param {string} [props.variant='spinner'] - Animation variant
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element|null} Loading overlay or null if not loading
 */
export const LoadingOverlay = ({ 
  isLoading, 
  text = 'Loading...', 
  variant = 'spinner',
  className = '' 
}) => {
  // Implementation details...
}
```

**Props:**
- `isLoading` (boolean): Controls overlay visibility
- `text` (string, optional): Loading text (default: 'Loading...')
- `variant` (string, optional): Animation variant (default: 'spinner')
- `className` (string, optional): Additional CSS classes

**Usage:**
```javascript
import { LoadingOverlay } from './components/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div>
      <LoadingOverlay 
        isLoading={isLoading} 
        text="Processing your request..." 
        variant="gradient" 
      />
      
      {/* Your app content */}
      <main>
        <h1>Welcome to Ubuntu</h1>
        {/* ... */}
      </main>
    </div>
  );
}
```

#### InlineLoader

```javascript
/**
 * Inline loading wrapper component
 * @param {Object} props - Component props
 * @param {boolean} props.isLoading - Controls loading state
 * @param {React.ReactNode} props.children - Content to show when not loading
 * @param {React.ReactNode} [props.fallback] - Custom loading fallback
 * @param {string} [props.size='md'] - Spinner size
 * @param {string} [props.variant='spinner'] - Animation variant
 * @returns {JSX.Element} Loading wrapper component
 */
export const InlineLoader = ({ 
  isLoading, 
  children, 
  fallback,
  size = 'md',
  variant = 'spinner'
}) => {
  // Implementation details...
}
```

**Props:**
- `isLoading` (boolean): Controls loading state
- `children` (React.ReactNode): Content to show when not loading
- `fallback` (React.ReactNode, optional): Custom loading fallback component
- `size` (string, optional): Spinner size (default: 'md')
- `variant` (string, optional): Animation variant (default: 'spinner')

**Usage:**
```javascript
import { InlineLoader } from './components/LoadingSpinner';

function DataComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  
  return (
    <InlineLoader 
      isLoading={isLoading} 
      size="md" 
      variant="dots"
      fallback={<div>Custom loading message...</div>}
    >
      <div className="data-content">
        <h2>Data Loaded</h2>
        <p>{data}</p>
      </div>
    </InlineLoader>
  );
}
```

### ProgressIndicator

**File:** `frontend/src/components/ProgressIndicator.js`

A progress indicator component with linear and circular variants, smooth animations, and customizable styling.

```javascript
/**
 * Progress indicator component with linear and circular variants
 * @param {Object} props - Component props
 * @param {number} [props.value=0] - Current progress value
 * @param {number} [props.max=100] - Maximum value
 * @param {string} [props.size='md'] - Size ('sm', 'md', 'lg', 'xl')
 * @param {string} [props.variant='linear'] - Variant ('linear', 'circular')
 * @param {string} [props.color='orange'] - Color theme ('orange', 'blue', 'green', 'red', 'purple')
 * @param {boolean} [props.showValue=true] - Show percentage/value
 * @param {boolean} [props.animated=true] - Enable animations
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element} Progress indicator component
 */
const ProgressIndicator = ({ 
  value = 0, 
  max = 100, 
  size = 'md',
  variant = 'linear',
  color = 'orange',
  showValue = true,
  animated = true,
  className = ''
}) => {
  // Implementation details...
}
```

**Props:**
- `value` (number, optional): Current progress value (default: 0)
- `max` (number, optional): Maximum value (default: 100)
- `size` (string, optional): Size - 'sm', 'md', 'lg', 'xl' (default: 'md')
- `variant` (string, optional): Variant - 'linear', 'circular' (default: 'linear')
- `color` (string, optional): Color theme - 'orange', 'blue', 'green', 'red', 'purple' (default: 'orange')
- `showValue` (boolean, optional): Show percentage/value (default: true)
- `animated` (boolean, optional): Enable smooth animations (default: true)
- `className` (string, optional): Additional CSS classes

**Usage:**
```javascript
import ProgressIndicator from './components/ProgressIndicator';

function ProgressExample() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="space-y-8">
      {/* Linear progress */}
      <ProgressIndicator 
        value={progress} 
        max={100} 
        variant="linear" 
        color="blue" 
      />
      
      {/* Circular progress */}
      <ProgressIndicator 
        value={progress} 
        max={100} 
        variant="circular" 
        size="lg" 
      />
      
      {/* Small progress without value */}
      <ProgressIndicator 
        value={progress} 
        max={100} 
        size="sm" 
        showValue={false} 
      />
    </div>
  );
}
```

**Size Classes:**
- `sm`: `h-2` (linear) / `w-16 h-16` (circular)
- `md`: `h-4` (linear) / `w-24 h-24` (circular) - default
- `lg`: `h-6` (linear) / `w-32 h-32` (circular)
- `xl`: `h-8` (linear) / `w-40 h-40` (circular)

**Color Gradients:**
- `orange`: `from-orange-500 to-red-600` (default)
- `blue`: `from-blue-500 to-blue-600`
- `green`: `from-green-500 to-green-600`
- `red`: `from-red-500 to-red-600`
- `purple`: `from-purple-500 to-purple-600`

**Features:**
- Smooth value transitions with 1-second animation
- Gradient backgrounds for visual appeal
- Shimmer effect on linear progress bars
- Circular progress with SVG stroke animations
- Responsive sizing
- Dark mode support

#### RadialProgress

```javascript
/**
 * Radial progress component with customizable size and stroke width
 * @param {Object} props - Component props
 * @param {number} [props.value=0] - Current progress value
 * @param {number} [props.max=100] - Maximum value
 * @param {number} [props.size=120] - Size in pixels
 * @param {number} [props.strokeWidth=8] - Stroke width
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element} Radial progress component
 */
export const RadialProgress = ({ 
  value = 0, 
  max = 100, 
  size = 120, 
  strokeWidth = 8, 
  className = '' 
}) => {
  // Implementation details...
}
```

**Props:**
- `value` (number, optional): Current progress value (default: 0)
- `max` (number, optional): Maximum value (default: 100)
- `size` (number, optional): Size in pixels (default: 120)
- `strokeWidth` (number, optional): Stroke width (default: 8)
- `className` (string, optional): Additional CSS classes

**Usage:**
```javascript
import { RadialProgress } from './components/ProgressIndicator';

function RadialExample() {
  return (
    <div className="flex space-x-4">
      <RadialProgress 
        value={75} 
        max={100} 
        size={100} 
        strokeWidth={6} 
      />
      
      <RadialProgress 
        value={50} 
        max={100} 
        size={150} 
        strokeWidth={12} 
      />
    </div>
  );
}
```

### Tooltip

**File:** `frontend/src/components/Tooltip.js`

A tooltip component with smart positioning, accessibility features, and configurable delay.

```javascript
/**
 * Tooltip component with smart positioning and accessibility
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Trigger element
 * @param {string} props.content - Tooltip content
 * @param {string} [props.position='top'] - Preferred position ('top', 'bottom', 'left', 'right')
 * @param {number} [props.delay=300] - Show delay in milliseconds
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {boolean} [props.disabled=false] - Disable tooltip
 * @returns {JSX.Element} Tooltip wrapper component
 */
const Tooltip = ({ 
  children, 
  content, 
  position = 'top', 
  delay = 300,
  className = '',
  disabled = false 
}) => {
  // Implementation details...
}
```

**Props:**
- `children` (React.ReactNode): Trigger element that shows the tooltip
- `content` (string): Tooltip content text
- `position` (string, optional): Preferred position - 'top', 'bottom', 'left', 'right' (default: 'top')
- `delay` (number, optional): Show delay in milliseconds (default: 300)
- `className` (string, optional): Additional CSS classes
- `disabled` (boolean, optional): Disable tooltip functionality (default: false)

**Usage:**
```javascript
import Tooltip from './components/Tooltip';

function TooltipExample() {
  return (
    <div className="space-y-4">
      {/* Basic tooltip */}
      <Tooltip content="This is a helpful tooltip">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover me
        </button>
      </Tooltip>
      
      {/* Tooltip with custom position and delay */}
      <Tooltip 
        content="Tooltip on the right" 
        position="right" 
        delay={500}
      >
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          Right tooltip
        </button>
      </Tooltip>
      
      {/* Disabled tooltip */}
      <Tooltip content="This won't show" disabled>
        <button className="px-4 py-2 bg-gray-500 text-white rounded">
          No tooltip
        </button>
      </Tooltip>
    </div>
  );
}
```

**Position Classes:**
- `top`: `bottom-full left-1/2 transform -translate-x-1/2 mb-2`
- `bottom`: `top-full left-1/2 transform -translate-x-1/2 mt-2`
- `left`: `right-full top-1/2 transform -translate-y-1/2 mr-2`
- `right`: `left-full top-1/2 transform -translate-y-1/2 ml-2`

**Features:**
- Smart positioning that adjusts to fit viewport
- Configurable show delay
- Keyboard accessibility (focus/blur events)
- Smooth fade-in animation
- Dark mode support
- Arrow indicators
- Viewport boundary detection

### Navigation

**File:** `frontend/src/components/Navigation.js`

The main navigation component with mobile responsiveness, accessibility features, and dark mode integration.

```javascript
/**
 * Main navigation component with mobile menu and accessibility features
 * @returns {JSX.Element} Navigation component
 */
function Navigation() {
  // Implementation details...
}
```

**Props:** None (uses context and routing internally)

**Usage:**
```javascript
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="pt-16">
        {/* Your app content */}
      </main>
    </div>
  );
}
```

**Navigation Items:**
```javascript
const navItems = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/try', label: 'Try Ubuntu', icon: '🖥️' },
  { path: '/installation', label: 'Installation', icon: '⚙️' },
  { path: '/software', label: 'Software', icon: '📦' },
  { path: '/community', label: 'Community', icon: '👥' },
  { path: '/why-ubuntu', label: 'Why Ubuntu?', icon: '❓' }
];
```

**Features:**
- Mobile-responsive hamburger menu
- Smooth animations and transitions
- Keyboard navigation support
- Focus management and trapping
- Skip links for accessibility
- Dark mode integration
- Active state indicators
- Scroll-based styling changes
- Touch-friendly mobile interactions

**Accessibility Features:**
- ARIA labels and roles
- Skip navigation links
- Keyboard navigation in mobile menu
- Focus restoration
- Screen reader announcements
- High contrast support

---

## Page Components

The application includes several page components located in `frontend/src/pages/`:

### Home.js
**Landing page with Ubuntu introduction and key features**

### TryUbuntu.js
**Ubuntu trial and demo page with interactive elements**

### Installation.js
**Installation guide page with step-by-step instructions**

### Software.js
**Software showcase page highlighting Ubuntu applications**

### Community.js
**Community information page with resources and links**

### WhyUbuntu.js
**Ubuntu benefits and features comparison page**

Each page component is a React functional component that renders the respective page content with proper routing integration and responsive design.

---

## Component Patterns

### Common Patterns Used

1. **Controlled Components**: All form inputs and interactive elements use controlled component pattern
2. **Custom Hooks**: Theme management and other reusable logic is extracted into custom hooks
3. **Compound Components**: Modal component uses compound component pattern with variants
4. **Render Props**: Some components accept render functions for flexible content rendering
5. **Forwarding Refs**: Components that need ref access use React.forwardRef

### Best Practices

1. **Accessibility**: All components include proper ARIA attributes and keyboard navigation
2. **Performance**: Components use React.memo and useCallback for optimization
3. **Error Boundaries**: Components include proper error handling
4. **TypeScript**: Consider migrating to TypeScript for better type safety
5. **Testing**: Components should include unit tests for all functionality

### Styling Approach

1. **Tailwind CSS**: Utility-first CSS framework for consistent styling
2. **Dark Mode**: All components support dark mode through CSS classes
3. **Responsive Design**: Mobile-first approach with responsive breakpoints
4. **Animations**: Smooth transitions and micro-interactions for better UX
5. **Consistent Spacing**: Using Tailwind's spacing scale for consistency

---

This documentation provides comprehensive coverage of all React components in the Ubuntu website project. Each component includes detailed prop descriptions, usage examples, and implementation details to help developers understand and use the components effectively.