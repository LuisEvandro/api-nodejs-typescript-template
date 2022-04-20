require('dotenv').config();
import express, { Request, Response } from 'express';
//import '@controllers/UsersController'

//Environment variables
const PORT = process.env.PORT

const app = express()

//Base request API
app.get('/', (request: Request, response: Response) => {
  return response.json({ message: '🚀 API IS WORKING 🚀' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server is runing in http://localhost:${PORT} ...`);
})