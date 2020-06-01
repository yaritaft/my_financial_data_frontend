// Common
export const AUTH_TOKEN = 'auth-token';
export const USERNAME = 'username';
export const REMEMBERME = 'rememberme'
export const PROFILE = 'profile';

// Environment specific constants
const env = process.env.NODE_ENV

export const URI = env === 'production' ? 'http://us-east-1.elasticbeanstalk.com/graphql/' : 'http://localhost:8000/api/'





