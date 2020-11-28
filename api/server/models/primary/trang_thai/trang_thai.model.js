const {
  BaseModelSql
} = require('xc-data-mapper');

class trang_thai extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./trang_thai.meta.js')
    });

  }

}


module.exports = trang_thai;