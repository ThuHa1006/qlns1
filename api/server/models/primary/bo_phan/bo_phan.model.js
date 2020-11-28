const {
  BaseModelSql
} = require('xc-data-mapper');

class bo_phan extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./bo_phan.meta.js')
    });

  }

}


module.exports = bo_phan;