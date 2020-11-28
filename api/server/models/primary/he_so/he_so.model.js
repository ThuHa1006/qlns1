const {
  BaseModelSql
} = require('xc-data-mapper');

class he_so extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./he_so.meta.js')
    });

  }

}


module.exports = he_so;