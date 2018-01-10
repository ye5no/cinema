import Router from 'koa-router';
import getUser from '../utils/getUser.js';
import {MAX_RESERV} from '../config.js';

const router = new Router();

router
  .get('/', getUser(), async (ctx) => {
    ctx.cookies.set('maxReserv', MAX_RESERV || 5, {httpOnly: false});
    await ctx.render('index');
  });

export default router.routes();
