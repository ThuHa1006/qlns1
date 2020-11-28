const {
  BaseModelSql
} = require('xc-data-mapper');

class loai_he_so extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./loai_he_so.meta.js')
    });

  }

}


module.exports = loai_he_so;