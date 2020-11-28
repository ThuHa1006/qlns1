const {
  BaseModelSql
} = require('xc-data-mapper');

class nhom_nguoi_dung extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./nhom_nguoi_dung.meta.js')
    });

  }

}


module.exports = nhom_nguoi_dung;