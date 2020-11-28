const {
  BaseRouter
} = require('xc-core');

class PhieuLuongRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PhieuLuongService = app.$services.primary.PhieuLuongService;
    this.PhieuLuongMiddleware = app.$middlewares.primary.PhieuLuongMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.PhieuLuongService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.PhieuLuongService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.PhieuLuongService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.PhieuLuongService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.PhieuLuongService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.PhieuLuongService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.PhieuLuongService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.PhieuLuongService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.PhieuLuongService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.PhieuLuongService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.PhieuLuongService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.PhieuLuongService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.PhieuLuongService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.PhieuLuongService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.PhieuLuongService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/phieu_luong*",this.PhieuLuongMiddleware.default)

    router.get('/api/v1/phieu_luong', this.PhieuLuongMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/phieu_luong', this.PhieuLuongMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/phieu_luong/findOne', this.PhieuLuongMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/phieu_luong/groupby/:columnName', this.PhieuLuongMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/phieu_luong/distribution/:columnName', this.PhieuLuongMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/phieu_luong/distinct/:columnName', this.PhieuLuongMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/phieu_luong/aggregate/:columnName', this.PhieuLuongMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/phieu_luong/count', this.PhieuLuongMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/phieu_luong/bulk', this.PhieuLuongMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/phieu_luong/bulk', this.PhieuLuongMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/phieu_luong/bulk', this.PhieuLuongMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/phieu_luong/:id', this.PhieuLuongMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/phieu_luong/:id', this.PhieuLuongMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/phieu_luong/:id', this.PhieuLuongMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/phieu_luong/:id/exists', this.PhieuLuongMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = PhieuLuongRouter;