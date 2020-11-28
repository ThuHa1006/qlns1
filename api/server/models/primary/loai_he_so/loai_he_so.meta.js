module.exports = {
  tableName: 'loai_he_so',
  columns: [{
      columnName: 'ma',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      primaryKey: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ten',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'mo_ta',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ngay_tao',
      type: 'datetime',
      dataType: 'datetime',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [],
  belongsTo: [],
  dbType: 'mysql'
}