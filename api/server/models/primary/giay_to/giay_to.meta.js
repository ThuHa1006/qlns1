module.exports = {
  tableName: 'giay_to',
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
      data_type_x_precision: "20",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ghi_chu',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "200",
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