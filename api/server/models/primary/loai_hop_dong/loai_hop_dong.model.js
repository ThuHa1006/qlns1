const {
  BaseModelSql
} = require('xc-data-mapper');

class loai_hop_dong extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./loai_hop_dong.meta.js')
    });

  }

}


module.exports = loai_hop_dong;