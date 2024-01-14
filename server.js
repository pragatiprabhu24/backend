const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = process.env.PORT || 8080

app.use('/api/v1/auth', require('./routes/authRoutes'))

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})


app.listen(PORT, () => {
    console.log('server is running')
})