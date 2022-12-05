import express, {Express} from 'express'
import { bidRouter } from './Bid/bid.router';
import { sequelize } from './db';
import dotenv from 'dotenv'
import { documentRouter } from './Document/document.router';
import { corsMiddleware } from './middleware/cors.middleware';
import { userRouter } from './User/user.router';
dotenv.config()

const PORT = process.env.PORT || 8000

const app: Express = express();

app.use(express.json())
app.use(corsMiddleware)
app.use('/api/users', userRouter)
app.use('/api/documents', documentRouter)
app.use('/api/bids', bidRouter)

const start = async () => {
  try {
    console.log(PORT)
    await sequelize.authenticate()
    app.listen(PORT, () => {
      console.log('Server run')
    })
  } catch (e) {
    console.log(e)
  }
}

start()