import fs from 'fs';
import {DIR} from '../../config.js';

const syncDB = async (model) => {
  try {
    await model.db.sync({alter: true});
    const data = await model.db.findAll();
    if (data.length == 0) await model.init(model.db);
    console.log(`${model.db.name} sync complete!`);
  } catch (e) {
    console.error(e);
    throw (e);
  }
};

exports.init = () => {
  const stack = fs.readdirSync(DIR + '/server/models');
  stack.forEach((file) => {
    const model = require('../../models/' + file);
    syncDB(model.default);
  });
};
