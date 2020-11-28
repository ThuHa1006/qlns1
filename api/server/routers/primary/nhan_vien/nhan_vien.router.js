const {
  BaseRouter
} = require('xc-core');

class NhanVienRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.NhanVienService = app.$services.primary.NhanVienService;
    this.NhanVienMiddleware = app.$middlewares.primary.NhanVienMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NhanVienService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NhanVienService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NhanVienService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NhanVienService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NhanVienService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NhanVienService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NhanVienService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NhanVienService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NhanVienService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NhanVienService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NhanVienService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NhanVienService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NhanVienService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NhanVienService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NhanVienService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/nhan_vien*",this.NhanVienMiddleware.default)

    router.get('/api/v1/nhan_vien', this.NhanVienMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/nhan_vien', this.NhanVienMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/nhan_vien/findOne', this.NhanVienMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/nhan_vien/groupby/:columnName', this.NhanVienMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/nhan_vien/distribution/:columnName', this.NhanVienMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/nhan_vien/distinct/:columnName', this.NhanVienMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/nhan_vien/aggregate/:columnName', this.NhanVienMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/nhan_vien/count', this.NhanVienMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/nhan_vien/bulk', this.NhanVienMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/nhan_vien/bulk', this.NhanVienMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/nhan_vien/bulk', this.NhanVienMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/nhan_vien/:id', this.NhanVienMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/nhan_vien/:id', this.NhanVienMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/nhan_vien/:id', this.NhanVienMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/nhan_vien/:id/exists', this.NhanVienMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = NhanVienRouter;