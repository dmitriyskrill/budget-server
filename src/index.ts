import express, { Request, Response } from 'express'

const app = express()
const port = 3003

app.get('/', (req: Request, res: Response) => {
  let hi = 'hi 124'
  res.send(hi)
})

app.listen(port, () => {
  console.log('Server listen on port: ', port)
})
