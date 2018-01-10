import e1 from '../../utils/e1.js';
import modelSeats from '../../models/seats.js';
const {db: Seats} = modelSeats;
import {MAX_SEATS, MAX_RESERV} from '../../config.js';
import app from '../../app.js';
import {Op} from 'sequelize';

let currentReservation = [];

async function validTryReservation(tryChange, reservPlus, userID) {
  if (!Array.isArray(tryChange)) throw new e1.OwnError(406, 600);
  console.log(tryChange);
  const countTryChange = tryChange.length;
  const currentReservThisUser = await Seats.findAll({where: {reserv: userID}});
  const countCurrentReserv = currentReservThisUser.length;
  if (reservPlus) {
    if (countTryChange+countCurrentReserv>MAX_RESERV) throw new e1.OwnError(406, 602);
  } else {
    if (countCurrentReserv-countTryChange<0) throw new e1.OwnError(406, 603);
  }
  let allTryReserv = true;
  const validChange = [];
  for (let i=0; i<countTryChange; i++) {
    if (Number.isInteger(tryChange[i]) && tryChange[i] >= 1 && tryChange[i] <= MAX_SEATS && validChange.indexOf(tryChange[i]) == -1) {
      validChange.push(tryChange[i]);
    } else {
      allTryReserv = false;
      break;
    }
  }
  if (!allTryReserv) throw new e1.OwnError(406, 600);
  console.log('Validation ok!');
  const validChangeFiltered=[];
  for (let i=0, N=validChange.length; i<N; i++) {
    const elem = validChange[i];
    if (reservPlus) {
      if (currentReservation.indexOf(elem) == -1) {
        const indexElem = currentReservation.push(elem);
        const dbElem = await Seats.findOne({where: {seatID: elem, reserv: 0}});
        if (dbElem!=null) {
          validChangeFiltered.push(elem);
        } else {
          currentReservation.splice(indexElem, 1);
        }
      }
    } else {
      const dbElem = await Seats.findOne({where: {seatID: elem, reserv: userID}});
      if (dbElem!=null) validChangeFiltered.push(elem);
    }
  }
  console.log(validChangeFiltered);
  return validChangeFiltered;
}

export default {
  async getReserv(ctx, next) { // получить текущую картину резерва и подписаться на события
    const user = ctx.user;
    console.log(`${new Date().toLocaleString()} user=${user.userID || undefined} getReserv`);
    const currentState = await Seats.findAll();
    ctx.res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
    });
    ctx.res.write(JSON.stringify(currentState));
    ctx.res.end();
  },

  async setReserv(ctx, next) { // осуществить бронирование
    const user = ctx.user;
    if (ctx.request.header['content-type'] != 'application/json') throw new e1.OwnError(400, 10);
    if (!user) throw new e1.OwnError(401, 101);
    const body = ctx.request.body;
    if (body.reserv == undefined || body.flag == undefined) throw new e1.OwnError(406, 601);
    if (body.flag != true && body.flag != false) throw new e1.OwnError(406, 601);
    const tryReservation = body.reserv;
    const forReservation = await validTryReservation(tryReservation, body.flag, user.userID);
    if (body.flag === true) {
      await Seats.update({reserv: user.userID, color: user.color}, {where: {seatID: {[Op.in]: forReservation}}});
      app.io.broadcast('reserv', {seats: forReservation, userRes: user.userID, color: user.color});
      forReservation.forEach((elem)=>{
        currentReservation.splice(currentReservation.indexOf(elem), 1);
      });
    } else {
      await Seats.update({reserv: 0, color: '#FFFFFF'}, {where: {seatID: {[Op.in]: forReservation}}});
      app.io.broadcast('free', {seats: forReservation});
    }
    console.log(`${new Date().toLocaleString()} user=${user.userID} reserved ${forReservation} success!`);
    ctx.res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
    });
    ctx.res.write(JSON.stringify({seats: forReservation, flag: body.flag}));
    ctx.res.end();
  },

  async resetAll(ctx, next) { // осуществить бронирование
    const user = ctx.user;
    if (!user) throw new e1.OwnError(401, 101);
    console.log(`${new Date().toLocaleString()} user=${user.userID} resetAll`);
    const currentState = await Seats.findAll();
    const forReset = currentState.map((elem) => (elem.seatID));
    await Seats.update({reserv: 0, color: '#FFFFFF'}, {where: {seatID: {[Op.in]: forReset}}});
    app.io.broadcast('free', {seats: forReset});
    currentReservation = [];
    ctx.res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
    });
    ctx.res.end();
  },
};
