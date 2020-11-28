module.exports = {
  tableName: 'tang_ca',
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
      columnName: 'ma_nhan_vien',
      type: 'integer',
      dataType: 'int',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ngay',
      type: 'datetime',
      dataType: 'datetime',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'so_gio',
      type: 'float',
      dataType: 'float',
      data_type_x_precision: "12",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'nguoi_xac_nhan',
      type: 'integer',
      dataType: 'int',
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