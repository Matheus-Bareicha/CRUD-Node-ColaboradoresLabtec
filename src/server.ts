import express from 'express';
import morgan from 'morgan';
import routes from './routes.js';

const app = express();
const PORT = 3001;

app.use(morgan('dev'));
app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
