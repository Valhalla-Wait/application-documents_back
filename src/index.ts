import express, {Express} from 'express'
import { bidRouter } from './Bid/bid.router';
import { sequelize } from './db';
import { documentRouter } from './Document/document.router';
import { userRouter } from './User/user.router';

const PORT = 8000

const app: Express = express();

app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/documents', documentRouter)
app.use('/api/bids', bidRouter)

const start = async () => {
  try {
    await sequelize.authenticate()
    app.listen(PORT, () => {
      console.log('Server run')
    })
  } catch (e) {
    console.log(e)
  }
}

start()