const {
  BaseModelSql
} = require('xc-data-mapper');

class loai_quyet_dinh extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./loai_quyet_dinh.meta.js')
    });

  }

}


module.exports = loai_quyet_dinh;