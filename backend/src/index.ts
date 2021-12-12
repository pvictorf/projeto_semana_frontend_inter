import express from 'express';
import routes from './routes';
import { globalErrors } from './middlewares/globalErrors';
import { createConnection } from 'typeorm';

createConnection().then(connection => {
  try {
    const app = express();
    const PORT = 3333;

    app.use(express.json());
    app.use(routes);
    app.use(globalErrors);

    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
    
  } catch (err) {
    console.log('Unable to connect to the database', err)
  }
})
