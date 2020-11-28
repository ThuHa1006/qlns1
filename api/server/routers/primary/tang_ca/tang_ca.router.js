const {
  BaseRouter
} = require('xc-core');

class TangCaRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.TangCaService = app.$services.primary.TangCaService;
    this.TangCaMiddleware = app.$middlewares.primary.TangCaMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.TangCaService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.TangCaService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.TangCaService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.TangCaService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.TangCaService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.TangCaService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.TangCaService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.TangCaService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.TangCaService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.TangCaService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.TangCaService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.TangCaService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.TangCaService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.TangCaService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.TangCaService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/tang_ca*",this.TangCaMiddleware.default)

    router.get('/api/v1/tang_ca', this.TangCaMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/tang_ca', this.TangCaMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/tang_ca/findOne', this.TangCaMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/tang_ca/groupby/:columnName', this.TangCaMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/tang_ca/distribution/:columnName', this.TangCaMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/tang_ca/distinct/:columnName', this.TangCaMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/tang_ca/aggregate/:columnName', this.TangCaMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/tang_ca/count', this.TangCaMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/tang_ca/bulk', this.TangCaMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/tang_ca/bulk', this.TangCaMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/tang_ca/bulk', this.TangCaMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/tang_ca/:id', this.TangCaMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/tang_ca/:id', this.TangCaMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/tang_ca/:id', this.TangCaMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/tang_ca/:id/exists', this.TangCaMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = TangCaRouter;