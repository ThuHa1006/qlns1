module.exports = {
  tableName: 'quyet_dinh',
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
      columnName: 'ma_loai_quyet_dinh',
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
      columnName: 'ngay_hieu_luc',
      type: 'datetime',
      dataType: 'datetime',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ngay_het_hieu_luc',
      type: 'datetime',
      dataType: 'datetime',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'link',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
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