const {
  BaseRouter
} = require('xc-core');

class PhieuDanhGiaRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PhieuDanhGiaService = app.$services.primary.PhieuDanhGiaService;
    this.PhieuDanhGiaMiddleware = app.$middlewares.primary.PhieuDanhGiaMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.PhieuDanhGiaService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.PhieuDanhGiaService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.PhieuDanhGiaService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.PhieuDanhGiaService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.PhieuDanhGiaService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.PhieuDanhGiaService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.PhieuDanhGiaService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.PhieuDanhGiaService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.PhieuDanhGiaService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.PhieuDanhGiaService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.PhieuDanhGiaService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.PhieuDanhGiaService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.PhieuDanhGiaService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.PhieuDanhGiaService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.PhieuDanhGiaService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/phieu_danh_gia*",this.PhieuDanhGiaMiddleware.default)

    router.get('/api/v1/phieu_danh_gia', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/phieu_danh_gia', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/phieu_danh_gia/findOne', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/phieu_danh_gia/groupby/:columnName', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/phieu_danh_gia/distribution/:columnName', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/phieu_danh_gia/distinct/:columnName', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/phieu_danh_gia/aggregate/:columnName', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/phieu_danh_gia/count', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/phieu_danh_gia/bulk', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/phieu_danh_gia/bulk', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/phieu_danh_gia/bulk', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/phieu_danh_gia/:id', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/phieu_danh_gia/:id', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/phieu_danh_gia/:id', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/phieu_danh_gia/:id/exists', this.PhieuDanhGiaMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = PhieuDanhGiaRouter;