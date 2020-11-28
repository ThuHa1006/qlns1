const {
  BaseModelSql
} = require('xc-data-mapper');

class cham_cong extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./cham_cong.meta.js')
    });

  }

}


module.exports = cham_cong;