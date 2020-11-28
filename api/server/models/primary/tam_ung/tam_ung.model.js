const {
  BaseModelSql
} = require('xc-data-mapper');

class tam_ung extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./tam_ung.meta.js')
    });

  }

}


module.exports = tam_ung;