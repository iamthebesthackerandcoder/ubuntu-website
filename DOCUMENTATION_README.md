# Ubuntu Website Documentation

Welcome to the comprehensive documentation for the Ubuntu website project. This documentation covers all public APIs, functions, components, and development guidelines.

## 📚 Documentation Overview

This project includes a full-stack web application with:
- **Backend**: FastAPI server with MongoDB integration
- **Frontend**: React application with modern UI components
- **Features**: Dark mode, responsive design, accessibility, and more

## 📖 Documentation Files

### 1. [API Documentation](./API_DOCUMENTATION.md)
Complete documentation of all backend APIs, data models, and endpoints.

**Includes:**
- FastAPI server configuration
- Data models (StatusCheck, StatusCheckCreate)
- API endpoints with examples
- Environment setup
- Deployment guidelines

### 2. [Component Documentation](./COMPONENT_DOCUMENTATION.md)
Detailed JSDoc-style documentation for all React components.

**Includes:**
- Context providers (ThemeContext)
- UI components (Modal, LoadingSpinner, ProgressIndicator, etc.)
- Page components
- Component patterns and best practices
- Usage examples and prop descriptions

### 3. [Quick Reference Guide](./QUICK_REFERENCE.md)
Fast access to common patterns, code snippets, and development commands.

**Includes:**
- API quick reference
- Component usage examples
- Common development patterns
- Environment setup
- Troubleshooting guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MongoDB (local or cloud instance)

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
export MONGO_URL="your_mongodb_connection_string"
export DB_NAME="your_database_name"
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Docker Setup
```bash
docker build -t ubuntu-website .
docker run -p 3000:3000 -p 8000:8000 ubuntu-website
```

## 🏗️ Project Structure

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

## 🔧 Key Features

### Backend Features
- **FastAPI**: Modern, fast web framework
- **MongoDB Integration**: Async database operations
- **CORS Support**: Cross-origin resource sharing
- **Data Validation**: Pydantic models
- **Environment Management**: Python-dotenv

### Frontend Features
- **React 19**: Latest React features
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **Dark Mode**: System preference detection
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA attributes and keyboard navigation

### UI Components
- **Modal**: Flexible modal with variants
- **LoadingSpinner**: Multiple animation variants
- **ProgressIndicator**: Linear and circular progress
- **Tooltip**: Smart positioning tooltips
- **DarkModeToggle**: Animated theme switcher
- **Navigation**: Mobile-responsive navigation

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/` | Health check |
| POST | `/api/status` | Create status check |
| GET | `/api/status` | Get all status checks |

## 🎨 Component Library

### Context Providers
- **ThemeContext**: Theme management with dark/light mode

### UI Components
- **DarkModeToggle**: Theme switching button
- **Modal**: Overlay content display
- **LoadingSpinner**: Loading indicators
- **ProgressIndicator**: Progress visualization
- **Tooltip**: Information tooltips
- **Navigation**: Main navigation bar

### Page Components
- **Home**: Landing page
- **TryUbuntu**: Trial and demo page
- **Installation**: Installation guide
- **Software**: Software showcase
- **Community**: Community information
- **WhyUbuntu**: Benefits and features

## 🛠️ Development Guidelines

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

## 🧪 Testing

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

## 🚀 Deployment

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

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Update documentation
6. Submit a pull request

## 🤝 Support

For questions or issues:
1. Check the troubleshooting section in the Quick Reference Guide
2. Review the detailed documentation
3. Open an issue on the repository

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📚 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)

---

**Last Updated**: January 2024  
**Version**: 1.0.0  
**Maintainer**: Ubuntu Website Team