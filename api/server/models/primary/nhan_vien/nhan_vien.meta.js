module.exports = {
  tableName: 'nhan_vien',
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
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'gioi_tinh',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ngay_sinh',
      type: 'date',
      dataType: 'date',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'so_dien_thoai',
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
      columnName: 'email',
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
      columnName: 'dia_chi',
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
      columnName: 'ma_vi_tri',
      type: 'integer',
      dataType: 'int',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ma_cap_bac',
      type: 'integer',
      dataType: 'int',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ma_trang_thai',
      type: 'integer',
      dataType: 'int',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'bat_dau',
      type: 'datetime',
      dataType: 'datetime',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ket_thuc',
      type: 'datetime',
      dataType: 'datetime',
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