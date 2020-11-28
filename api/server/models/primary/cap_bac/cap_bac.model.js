const {
  BaseModelSql
} = require('xc-data-mapper');

class cap_bac extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./cap_bac.meta.js')
    });

  }

}


module.exports = cap_bac;