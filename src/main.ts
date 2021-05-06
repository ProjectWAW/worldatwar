import express from 'express';
import createError from 'http-errors';

import Logger from './modules/logging/logger';
import Config from './modules/config/config';
import Countries from './routes/country';
import Events from './routes/event';
import Sources from './routes/source';
import { DbService } from './services/db-service';

const app = express();
const PORT = Config.App.Port;

const dbService = new DbService();
dbService.ConnectToDb();

// Middleware
app.use(express.json());

// Routes
app.use('/countries', Countries);
app.use('/events', Events);
app.use('/sources', Sources);
app.get('/', (req, res) => res.send('Server Status is good! ✔'));

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(PORT, () => {
  Logger.debug(`⚡[Server]: WaW server is running at http://localhost:${PORT}`);
});
