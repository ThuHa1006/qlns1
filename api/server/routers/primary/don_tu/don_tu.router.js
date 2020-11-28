const {
  BaseRouter
} = require('xc-core');

class DonTuRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.DonTuService = app.$services.primary.DonTuService;
    this.DonTuMiddleware = app.$middlewares.primary.DonTuMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.DonTuService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.DonTuService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.DonTuService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.DonTuService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.DonTuService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.DonTuService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.DonTuService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.DonTuService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.DonTuService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.DonTuService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.DonTuService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.DonTuService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.DonTuService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.DonTuService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.DonTuService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/don_tu*",this.DonTuMiddleware.default)

    router.get('/api/v1/don_tu', this.DonTuMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/don_tu', this.DonTuMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/don_tu/findOne', this.DonTuMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/don_tu/groupby/:columnName', this.DonTuMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/don_tu/distribution/:columnName', this.DonTuMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/don_tu/distinct/:columnName', this.DonTuMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/don_tu/aggregate/:columnName', this.DonTuMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/don_tu/count', this.DonTuMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/don_tu/bulk', this.DonTuMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/don_tu/bulk', this.DonTuMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/don_tu/bulk', this.DonTuMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/don_tu/:id', this.DonTuMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/don_tu/:id', this.DonTuMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/don_tu/:id', this.DonTuMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/don_tu/:id/exists', this.DonTuMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = DonTuRouter;