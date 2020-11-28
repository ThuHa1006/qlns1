const {
  BaseModelSql
} = require('xc-data-mapper');

class phieu_luong extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./phieu_luong.meta.js')
    });

  }

}


module.exports = phieu_luong;