const {
  BaseModelSql
} = require('xc-data-mapper');

class phieu_danh_gia extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./phieu_danh_gia.meta.js')
    });

  }

}


module.exports = phieu_danh_gia;