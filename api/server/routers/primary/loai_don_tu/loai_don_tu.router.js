const {
  BaseRouter
} = require('xc-core');

class LoaiDonTuRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LoaiDonTuService = app.$services.primary.LoaiDonTuService;
    this.LoaiDonTuMiddleware = app.$middlewares.primary.LoaiDonTuMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.LoaiDonTuService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.LoaiDonTuService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.LoaiDonTuService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.LoaiDonTuService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.LoaiDonTuService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.LoaiDonTuService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.LoaiDonTuService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.LoaiDonTuService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.LoaiDonTuService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.LoaiDonTuService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.LoaiDonTuService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.LoaiDonTuService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.LoaiDonTuService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.LoaiDonTuService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.LoaiDonTuService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/loai_don_tu*",this.LoaiDonTuMiddleware.default)

    router.get('/api/v1/loai_don_tu', this.LoaiDonTuMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/loai_don_tu', this.LoaiDonTuMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/loai_don_tu/findOne', this.LoaiDonTuMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/loai_don_tu/groupby/:columnName', this.LoaiDonTuMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/loai_don_tu/distribution/:columnName', this.LoaiDonTuMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/loai_don_tu/distinct/:columnName', this.LoaiDonTuMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/loai_don_tu/aggregate/:columnName', this.LoaiDonTuMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/loai_don_tu/count', this.LoaiDonTuMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/loai_don_tu/bulk', this.LoaiDonTuMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/loai_don_tu/bulk', this.LoaiDonTuMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/loai_don_tu/bulk', this.LoaiDonTuMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/loai_don_tu/:id', this.LoaiDonTuMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/loai_don_tu/:id', this.LoaiDonTuMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/loai_don_tu/:id', this.LoaiDonTuMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/loai_don_tu/:id/exists', this.LoaiDonTuMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = LoaiDonTuRouter;