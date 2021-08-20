import express from 'express'; 
import proxy from './src'; 

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', proxy('http://www.example.org', {changeOrigin: true }));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})