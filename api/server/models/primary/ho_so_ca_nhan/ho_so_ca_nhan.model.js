const {
  BaseModelSql
} = require('xc-data-mapper');

class ho_so_ca_nhan extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./ho_so_ca_nhan.meta.js')
    });

  }

}


module.exports = ho_so_ca_nhan;