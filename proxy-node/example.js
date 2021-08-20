import express from 'express'; 
import proxy from './src'; 
import bodyParser from 'body-parser'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', proxy('https://api.thecatapi.com/v1/categories?api_key=bad80a29-5a01-4594-aaef-9832b62dae96'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})