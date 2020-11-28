const {
  BaseRouter
} = require('xc-core');

class HeSoRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.HeSoService = app.$services.primary.HeSoService;
    this.HeSoMiddleware = app.$middlewares.primary.HeSoMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.HeSoService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.HeSoService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.HeSoService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.HeSoService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.HeSoService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.HeSoService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.HeSoService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.HeSoService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.HeSoService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.HeSoService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.HeSoService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.HeSoService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.HeSoService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.HeSoService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.HeSoService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/he_so*",this.HeSoMiddleware.default)

    router.get('/api/v1/he_so', this.HeSoMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/he_so', this.HeSoMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/he_so/findOne', this.HeSoMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/he_so/groupby/:columnName', this.HeSoMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/he_so/distribution/:columnName', this.HeSoMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/he_so/distinct/:columnName', this.HeSoMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/he_so/aggregate/:columnName', this.HeSoMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/he_so/count', this.HeSoMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/he_so/bulk', this.HeSoMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/he_so/bulk', this.HeSoMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/he_so/bulk', this.HeSoMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/he_so/:id', this.HeSoMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/he_so/:id', this.HeSoMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/he_so/:id', this.HeSoMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/he_so/:id/exists', this.HeSoMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = HeSoRouter;