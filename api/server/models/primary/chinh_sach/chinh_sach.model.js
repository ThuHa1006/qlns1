const {
  BaseModelSql
} = require('xc-data-mapper');

class chinh_sach extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./chinh_sach.meta.js')
    });

  }

}


module.exports = chinh_sach;