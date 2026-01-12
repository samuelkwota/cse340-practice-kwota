import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'production';

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// EJS configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Welcome Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

app.get('/products', (req, res) => {
    res.render('products', { title: 'Our Products' });
});

app.get('/student', (req, res) => {
    const student = {
        name: 'Samuel Kwota',
        id: '052636613',
        email: 'kwo20003@byui.edu',
        address: 'Ghana-Techiman 159'
    };

    res.render('student', {
        title: 'Student Information',
        student
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} (${NODE_ENV})`);
});
