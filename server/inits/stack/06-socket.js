import IO from 'koa-socket';
import socketsApp from '../../sockets';

exports.init = (app) => {
  const io = new IO();
  io.attach(app);
  app.io.on('connection', socketsApp);
};
