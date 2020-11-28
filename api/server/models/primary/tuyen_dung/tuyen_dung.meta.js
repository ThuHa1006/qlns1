module.exports = {
  tableName: 'tuyen_dung',
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
      columnName: 'ma_bo_phan',
      type: 'integer',
      dataType: 'int',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'link_ke_hoach',
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
      columnName: 'link_yeu_cau',
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