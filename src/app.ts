import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todos'

const app = express();
const port = 3005;

app.use(bodyParser.json())
app.use(todoRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

