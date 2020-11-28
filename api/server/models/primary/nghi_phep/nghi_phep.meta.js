module.exports = {
  tableName: 'nghi_phep',
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
      notNull: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'tong_huong',
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
      type: 'date',
      dataType: 'date',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'tinh_cong',
      type: 'integer',
      dataType: 'tinyint',
      data_type_x_precision: "1",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ly_do',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "200",
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