import Router from 'koa-router';
import authController from './auth-controller.js';
import jwtUser from '../../utils/getUser.js';

const router = new Router({ prefix: '/auth' });

router
  .post('/signup', jwtUser(), authController.signup)
  .post('/login', jwtUser(), authController.login)
  .get('/logout', jwtUser(), authController.logout)
  .get('/user', jwtUser(), authController.currentUser);

export default router.routes();
