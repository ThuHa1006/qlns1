const {
  BaseModelSql
} = require('xc-data-mapper');

class tuyen_dung extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./tuyen_dung.meta.js')
    });

  }

}


module.exports = tuyen_dung;