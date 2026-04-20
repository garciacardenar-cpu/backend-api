//Import required libraries
const express = require('express'); // Framework to create the server
const cors = require('cors'); // Ennable comnication between frontend and backend
require('dotenv').config(); // Load environment variables from .env file

//Create Express application
const app = express();

/**
 * Global middleware
 */

// Allows requests from different origins (e.g., frontend)
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

/**
 * Health check route
 * Used to verify that the server is running properly
 */
app.get('/', (req, res) => {
  res.send('API running');
});

/**
 * PORT configuration
 * Uses the PORT defined in .env or defaults to 3000
 */
const PORT = process.env.PORT || 3000;

/**
 * Start the server
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const bcrypt = require('bcrypt');

/**
 * Register a new user
 * Receives user data and hashes the password before stoeing it
 */
const registerUser = async (req, res) => {
    const { email, password } = req.body;

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    //Normaly, this data should be stored in a database
    res.json({ 
        message: 'User registered',
        password: hashedPassword // For testing only (never expose in production yet :D)
    });
}

const jwt = require('jsonwebtoken');

/**
 * User login
 * Generates a JWT token to authenticate future requests
 */
const login = async (req, res) => {
    const { email, password } = req.body;

    // Generate a token containing user information
    const token = jwt.sign(
        { email }, // Payload (user data)
        process.env.JWT_SECRET, //Secret key
        { expiresIn: '1h' } // Expiration time
    );

    res.json({ token });
}

const jwt = require('jsonwebtoken');
/**
 * Authentication middleware
 * Verifies if the request contains a valid JWT token
 */
const authMiddleware = (req, res, next) => {
    // Get token from request headers
    const token = req.headers.authorization;

    // Deny acces if no token is provided
    if (!token) return
    res.status(401).json({ error: 'No token' });

    try {
        // verify and decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        //Attach user data to the request object
        req.user = decoded;
        
        // Continue to the next middleware or route
        next();
    } catch {
        // Token is invalid or expired
        res.status(401).json({ error: 'Invalid token' });
    }
}

/**
 * Get users
 * Protected route: requires a valid token
 */
app.get('/users', authMiddleware, (req, res) => {
    res.json([{ id: 1, email: 'garicardocard@gmail.com'}]);
});

/**
 * Create a new user
 * Protected route to prevent unauthorized access
 */
app.post('/users', authMiddleware, (req, res) => {
    res.json({ message: 'User created' });
});

// JWT is used to maintain stateless authentication (scalable approach)

// Never store passwords in plain text

//Temporary response for testing purposes, replace with database logic