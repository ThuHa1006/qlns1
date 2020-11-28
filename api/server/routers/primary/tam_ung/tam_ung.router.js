const {
  BaseRouter
} = require('xc-core');

class TamUngRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.TamUngService = app.$services.primary.TamUngService;
    this.TamUngMiddleware = app.$middlewares.primary.TamUngMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.TamUngService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.TamUngService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.TamUngService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.TamUngService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.TamUngService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.TamUngService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.TamUngService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.TamUngService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.TamUngService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.TamUngService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.TamUngService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.TamUngService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.TamUngService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.TamUngService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.TamUngService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/tam_ung*",this.TamUngMiddleware.default)

    router.get('/api/v1/tam_ung', this.TamUngMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/tam_ung', this.TamUngMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/tam_ung/findOne', this.TamUngMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/tam_ung/groupby/:columnName', this.TamUngMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/tam_ung/distribution/:columnName', this.TamUngMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/tam_ung/distinct/:columnName', this.TamUngMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/tam_ung/aggregate/:columnName', this.TamUngMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/tam_ung/count', this.TamUngMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/tam_ung/bulk', this.TamUngMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/tam_ung/bulk', this.TamUngMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/tam_ung/bulk', this.TamUngMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/tam_ung/:id', this.TamUngMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/tam_ung/:id', this.TamUngMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/tam_ung/:id', this.TamUngMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/tam_ung/:id/exists', this.TamUngMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = TamUngRouter;