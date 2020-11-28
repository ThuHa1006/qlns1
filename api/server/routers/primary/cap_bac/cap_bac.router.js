const {
  BaseRouter
} = require('xc-core');

class CapBacRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CapBacService = app.$services.primary.CapBacService;
    this.CapBacMiddleware = app.$middlewares.primary.CapBacMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.CapBacService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.CapBacService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.CapBacService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CapBacService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CapBacService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CapBacService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CapBacService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.CapBacService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.CapBacService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.CapBacService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.CapBacService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.CapBacService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.CapBacService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.CapBacService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.CapBacService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/cap_bac*",this.CapBacMiddleware.default)

    router.get('/api/v1/cap_bac', this.CapBacMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/cap_bac', this.CapBacMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/cap_bac/findOne', this.CapBacMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/cap_bac/groupby/:columnName', this.CapBacMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/cap_bac/distribution/:columnName', this.CapBacMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/cap_bac/distinct/:columnName', this.CapBacMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/cap_bac/aggregate/:columnName', this.CapBacMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/cap_bac/count', this.CapBacMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/cap_bac/bulk', this.CapBacMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/cap_bac/bulk', this.CapBacMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/cap_bac/bulk', this.CapBacMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/cap_bac/:id', this.CapBacMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/cap_bac/:id', this.CapBacMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/cap_bac/:id', this.CapBacMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/cap_bac/:id/exists', this.CapBacMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = CapBacRouter;