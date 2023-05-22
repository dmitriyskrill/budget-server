import dotenv from 'dotenv'

dotenv.config()

import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
mongoose
  .connect(`${process.env.MONGO_URI}/${process.env.APP_NAME}` , {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(() => console.log(`MongoDB connected - ${process.env.MONGO_URI}/${process.env.APP_NAME}`))
  .catch(e => console.error(e))
const app = express()
const port = 3003

app.get('/', (req: Request, res: Response) => {
  let hi = 'hi 124 124'
  res.send(hi)
})

app.listen(port, () => {
  console.log('Server listen on port: ', port)
})
