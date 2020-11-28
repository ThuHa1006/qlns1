const {
  BaseModelSql
} = require('xc-data-mapper');

class loai_phu_cap extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./loai_phu_cap.meta.js')
    });

  }

}


module.exports = loai_phu_cap;