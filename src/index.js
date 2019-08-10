import http from 'http';
import debug from 'debug';
import app from './app';
import models from './database/models';
import '@babel/polyfill';

const server = http.createServer(app);

/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (typeof port === 'number' && port >= 0) {
    // named pipe
    return port;
  }

  return false;
};

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Event listener for HTTP server "error" event.
 */

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      debug.log(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug.log(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = async () => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
    debug.log(`Server is listening on http://localhost:${port}/`);
    models.sequelize.sync({ force: false });
  }
};

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
