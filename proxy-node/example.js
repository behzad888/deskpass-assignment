import express from 'express';
import proxy from './src';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const myProxy = proxy(
  'https://jsonplaceholder.typicode.com/posts'
);

app.use('/api', myProxy);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
