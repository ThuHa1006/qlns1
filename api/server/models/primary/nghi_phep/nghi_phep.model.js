const {
  BaseModelSql
} = require('xc-data-mapper');

class nghi_phep extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./nghi_phep.meta.js')
    });

  }

}


module.exports = nghi_phep;