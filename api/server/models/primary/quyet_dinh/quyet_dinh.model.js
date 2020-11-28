const {
  BaseModelSql
} = require('xc-data-mapper');

class quyet_dinh extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./quyet_dinh.meta.js')
    });

  }

}


module.exports = quyet_dinh;