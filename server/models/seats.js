import Sequelize from 'sequelize';
import sql from '../utils/mysql-connection';
import {MAX_SEATS} from '../config.js';

const name = 'seats';
const schema = {
  seatID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  reserv: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  color: {
    type: Sequelize.STRING,
    defaultValue: '#FFFFFF',
  },
};

const model = sql.define(name, schema);

async function initFunc(model) {
  for (let i=0; i<MAX_SEATS; i++) await model.create({});
  console.log(`Init Seats complete!`);
}

const extModel = {
  db: model,
  init: initFunc,
};

export default extModel;
