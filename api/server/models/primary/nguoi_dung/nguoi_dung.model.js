const {
  BaseModelSql
} = require('xc-data-mapper');

class nguoi_dung extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./nguoi_dung.meta.js')
    });

  }

}


module.exports = nguoi_dung;