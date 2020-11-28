const {
  BaseModelSql
} = require('xc-data-mapper');

class phu_cap extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./phu_cap.meta.js')
    });

  }

}


module.exports = phu_cap;