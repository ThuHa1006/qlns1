const {
  BaseModelSql
} = require('xc-data-mapper');

class nhan_vien extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./nhan_vien.meta.js')
    });

  }

}


module.exports = nhan_vien;