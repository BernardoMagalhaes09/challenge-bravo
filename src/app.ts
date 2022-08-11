import { users } from './routes/index'
import express,{ Request, Response, NextFunction, request,  } from 'express';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.disable('x-powered-by');
server.use((request, response, next) => {
  response.set({
    'Access-Control-Allow-Origin': '*'
  })
  next()
})
server.use('/public', express.static('public'));
server.use('/users', users.default);
server.use(async (request: Request, response: Response, next: NextFunction) => {
  next(response.status(400).json({ error: 'Router do not exists' }));
});

export default server;