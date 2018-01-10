import Router from 'koa-router';
import authController from './act-controller.js';
import jwtUser from '../../utils/getUser.js';

const router = new Router({ prefix: '/action' });

router
  .get('/reserv', jwtUser(), authController.getReserv)
  .get('/resetAll', jwtUser(), authController.resetAll)
  .post('/reserv', jwtUser(), authController.setReserv);

export default router.routes();
