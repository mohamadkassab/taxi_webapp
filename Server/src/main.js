import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import {BookFormRoute} from './routes/BookFormRoute.js';
import { ContactFormRoute } from './routes/ContactFormRoute.js';
import {DbConnect} from './middlewares/Dbx.js';
import { RateLimiter } from './middlewares/RateLimiter.js';

const app = express();
const Port = process.env.Port || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// connect to mongodb server
DbConnect();

// express json and cors
app.use(express.json());
app.use(cors());

// Static files
app.use(express.static(path.join(__dirname, 'build')));

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  res.setHeader('Cache-Control', 'public, max-age=7200'); // Cache for 1 hour
  next();
});

// home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// routes  
app.use("/bookform", RateLimiter);
app.use("/bookform",BookFormRoute);
app.use("/contactform",RateLimiter);
app.use("/contactform",ContactFormRoute);

//invalid routes
app.all('*', (req, res) => {
  res.status(404).send('Page not found');
});

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({
      message: err.message
    });   
});

app.listen(Port,() => { console.log(`server started at  http://127.0.0.1:${Port}`)}); 