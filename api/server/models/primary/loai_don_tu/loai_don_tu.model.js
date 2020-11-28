const {
  BaseModelSql
} = require('xc-data-mapper');

class loai_don_tu extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./loai_don_tu.meta.js')
    });

  }

}


module.exports = loai_don_tu;