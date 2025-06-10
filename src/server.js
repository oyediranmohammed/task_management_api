// src/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Load environment variables
dotenv.config();

// Connect to DB
connectDB();


