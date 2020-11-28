const {
  BaseModelSql
} = require('xc-data-mapper');

class giay_to extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./giay_to.meta.js')
    });

  }

}


module.exports = giay_to;