const {
  BaseModelSql
} = require('xc-data-mapper');

class vi_tri extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./vi_tri.meta.js')
    });

  }

}


module.exports = vi_tri;