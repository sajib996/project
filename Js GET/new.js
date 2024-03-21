const jwt = require('jsonwebtoken');

// Secret key to sign the JWT token
const secretKey = 'fjdfoidsj';

// Sample user object
const user = {
    id: 1,
    username: 'sdfdfdff'
};

// Create a JWT token
const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

console.log('Generated Token:', token);
