const {
  BaseModelSql
} = require('xc-data-mapper');

class don_tu extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./don_tu.meta.js')
    });

  }

}


module.exports = don_tu;