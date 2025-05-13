const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGODB_URI } = require('./utils/config');

// Importing Routes
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');

// Middleware
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

// Connection to MongoDB
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}
connectToMongoDB();

// Routes
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})