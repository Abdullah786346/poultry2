# Poultry Professionals Society - MERN Stack Application

A full-stack web application for the Poultry Professionals Society built with MongoDB, Express.js, React, and Node.js.

## Features

- **User Authentication**: Registration, login, email verification, password reset
- **User Dashboard**: Profile management, membership status
- **News & Events**: Create, read, update, delete news articles and events
- **Newsletter Subscription**: Email subscription management
- **Responsive Design**: Mobile-friendly interface
- **Security**: JWT authentication, password hashing, input validation

## Tech Stack

### Frontend
- React 19.1.0
- React Router DOM
- Tailwind CSS
- Axios for API calls
- Date-fns for date formatting
- React Icons

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Nodemailer for email services
- Express Validator for input validation
- Helmet for security headers
- CORS for cross-origin requests

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Gmail account for email services (or other SMTP provider)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd poultry-professionals-society
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   cd ..
   ```

3. **Environment Configuration**

   **Frontend (.env)**
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

   **Backend (server/.env)**
   ```
   MONGO_URI=mongodb+srv://muhammadabdullahfscem:ALrq4CYPnNbdK3o1@cluster0.vnsa0xi.mongodb.net/poultrydb?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_jwt_key_here_make_it_very_long_and_secure
   JWT_EXPIRE=7d
   NODE_ENV=development
   PORT=5000
   UPLOAD_DIR=uploads
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   CLIENT_URL=http://localhost:3000
   ```

4. **Start the application**
   ```bash
   # Start both frontend and backend concurrently
   npm start
   
   # Or start them separately
   npm run client  # Frontend only
   npm run server  # Backend only
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify-email/:token` - Email verification
- `POST /api/auth/forgot-password` - Request password reset
- `PUT /api/auth/reset-password/:token` - Reset password
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `PUT /api/users/change-password` - Change password
- `DELETE /api/users/profile` - Delete account

### News
- `GET /api/news` - Get all news articles
- `GET /api/news/:id` - Get single news article
- `POST /api/news` - Create news article (authenticated)
- `PUT /api/news/:id` - Update news article (authenticated)
- `DELETE /api/news/:id` - Delete news article (authenticated)
- `POST /api/news/:id/like` - Like/unlike news article (authenticated)
- `POST /api/news/:id/comments` - Add comment (authenticated)

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create event (authenticated)
- `PUT /api/events/:id` - Update event (authenticated)
- `DELETE /api/events/:id` - Delete event (authenticated)
- `POST /api/events/:id/register` - Register for event (authenticated)
- `DELETE /api/events/:id/register` - Cancel registration (authenticated)

### Subscriptions
- `POST /api/subscriptions` - Subscribe to newsletter
- `POST /api/subscriptions/unsubscribe` - Unsubscribe from newsletter
- `GET /api/subscriptions` - Get all subscriptions (admin only)

## Database Models

### User
- Personal information (name, email, organization, role)
- Authentication data (password, verification tokens)
- Membership status and preferences
- Profile settings

### News
- Article content (title, excerpt, content)
- Metadata (author, category, tags, status)
- Engagement (views, likes, comments)
- Publishing information

### Event
- Event details (title, description, date, location)
- Registration management
- Speaker information
- Attendance tracking

### Subscription
- Email subscription management
- Preference settings
- Subscription status tracking

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Email verification for new accounts
- Password reset functionality
- Input validation and sanitization
- CORS protection
- Security headers with Helmet
- Rate limiting (can be added)

## Development

### Project Structure
```
├── public/                 # Static files
├── src/                   # React frontend
│   ├── components/        # React components
│   ├── contexts/         # React contexts
│   ├── pages/            # Page components
│   ├── services/         # API services
│   └── styles/           # CSS files
├── server/               # Node.js backend
│   ├── models/          # Mongoose models
│   ├── routes/          # Express routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   └── uploads/         # File uploads
└── README.md
```

### Available Scripts

**Frontend:**
- `npm run client` - Start React development server
- `npm run build` - Build for production
- `npm test` - Run tests

**Backend:**
- `npm run server` - Start backend development server
- `cd server && npm start` - Start backend production server

**Full Stack:**
- `npm start` - Start both frontend and backend
- `npm run dev` - Start both in development mode

## Deployment

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)

### Backend Deployment
1. Set up environment variables on your hosting service
2. Deploy the `server` folder to your hosting service (Heroku, Railway, etc.)
3. Ensure MongoDB connection is configured for production

### Environment Variables for Production
- Update `CLIENT_URL` to your frontend domain
- Update `MONGO_URI` for production database
- Set `NODE_ENV=production`
- Configure email service credentials
- Generate secure `JWT_SECRET`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email poultryprofessionalsociety@gmail.com or create an issue in the repository.