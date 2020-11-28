module.exports = {
  tableName: 'he_so',
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
      columnName: 'ma_loai_he_so',
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
      columnName: 'he_so',
      type: 'float',
      dataType: 'float',
      notNull: true,
      data_type_x_precision: "12",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'don_vi',
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
      columnName: 'ngay_bat_dau',
      type: 'date',
      dataType: 'date',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ngay_ket_thuc',
      type: 'date',
      dataType: 'date',
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