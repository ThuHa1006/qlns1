module.exports = {
  tableName: 'phu_cap',
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
      columnName: 'ma_phu_cap',
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
      columnName: 'ngay_ket_thu',
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