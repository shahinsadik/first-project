import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/module/student/student.route';

const app: Application = express();
// parse
app.use(express.json());
app.use(cors());

//application route
app.use('/api/v1/students', StudentRoute);


// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
