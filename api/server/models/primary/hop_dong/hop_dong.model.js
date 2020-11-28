const {
  BaseModelSql
} = require('xc-data-mapper');

class hop_dong extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./hop_dong.meta.js')
    });

  }

}


module.exports = hop_dong;