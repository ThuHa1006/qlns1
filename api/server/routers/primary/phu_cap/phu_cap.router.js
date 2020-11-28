const {
  BaseRouter
} = require('xc-core');

class PhuCapRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PhuCapService = app.$services.primary.PhuCapService;
    this.PhuCapMiddleware = app.$middlewares.primary.PhuCapMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.PhuCapService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.PhuCapService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.PhuCapService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.PhuCapService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.PhuCapService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.PhuCapService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.PhuCapService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.PhuCapService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.PhuCapService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.PhuCapService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.PhuCapService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.PhuCapService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.PhuCapService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.PhuCapService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.PhuCapService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/phu_cap*",this.PhuCapMiddleware.default)

    router.get('/api/v1/phu_cap', this.PhuCapMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/phu_cap', this.PhuCapMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/phu_cap/findOne', this.PhuCapMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/phu_cap/groupby/:columnName', this.PhuCapMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/phu_cap/distribution/:columnName', this.PhuCapMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/phu_cap/distinct/:columnName', this.PhuCapMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/phu_cap/aggregate/:columnName', this.PhuCapMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/phu_cap/count', this.PhuCapMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/phu_cap/bulk', this.PhuCapMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/phu_cap/bulk', this.PhuCapMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/phu_cap/bulk', this.PhuCapMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/phu_cap/:id', this.PhuCapMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/phu_cap/:id', this.PhuCapMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/phu_cap/:id', this.PhuCapMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/phu_cap/:id/exists', this.PhuCapMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = PhuCapRouter;