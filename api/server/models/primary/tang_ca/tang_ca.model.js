const {
  BaseModelSql
} = require('xc-data-mapper');

class tang_ca extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./tang_ca.meta.js')
    });

  }

}


module.exports = tang_ca;