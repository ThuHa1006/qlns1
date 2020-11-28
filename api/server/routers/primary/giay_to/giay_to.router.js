const {
  BaseRouter
} = require('xc-core');

class GiayToRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.GiayToService = app.$services.primary.GiayToService;
    this.GiayToMiddleware = app.$middlewares.primary.GiayToMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.GiayToService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.GiayToService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.GiayToService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.GiayToService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.GiayToService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.GiayToService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.GiayToService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.GiayToService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.GiayToService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.GiayToService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.GiayToService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.GiayToService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.GiayToService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.GiayToService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.GiayToService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/giay_to*",this.GiayToMiddleware.default)

    router.get('/api/v1/giay_to', this.GiayToMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/giay_to', this.GiayToMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/giay_to/findOne', this.GiayToMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/giay_to/groupby/:columnName', this.GiayToMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/giay_to/distribution/:columnName', this.GiayToMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/giay_to/distinct/:columnName', this.GiayToMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/giay_to/aggregate/:columnName', this.GiayToMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/giay_to/count', this.GiayToMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/giay_to/bulk', this.GiayToMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/giay_to/bulk', this.GiayToMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/giay_to/bulk', this.GiayToMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/giay_to/:id', this.GiayToMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/giay_to/:id', this.GiayToMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/giay_to/:id', this.GiayToMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/giay_to/:id/exists', this.GiayToMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = GiayToRouter;