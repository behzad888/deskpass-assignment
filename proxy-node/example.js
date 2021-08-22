import express from 'express';
import proxy from './src';
import winston from 'winston';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

//we should use body parser to represent body content for like POST methods
// application/json
app.use(bodyParser.json());

//this is for using url encode
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//example for all GET, POST, PUT, PATCH, DELETE methods
// All HTTP methods are supported. You can use http or https for your requests.
// GET	/api
// GET	/api/1
// GET	/api/1/comments
// POST	/api
// PUT	/api/1
// PATCH	/api/1
// DELETE	/api/1
app.use(
  '/api',
  proxy(
    'https://jsonplaceholder.typicode.com/posts',
    {},
    {
      //using winston logger
      setLoggerProvider: () => {
        return winston.createLogger({
          transports: [
            new winston.transports.Console(),
            new winston.transports.File({filename: 'api.log'}),
          ],
        });
      },
    }
  )
);

//example html content
app.use('/html', proxy('http://www.example.org'));

//example html content for all website
app.use('/', proxy('https://www.overafaik.com/'));

//upload file example
app.use('/upload', proxy('https://file.io/'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
