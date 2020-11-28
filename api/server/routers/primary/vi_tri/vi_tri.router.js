const {
  BaseRouter
} = require('xc-core');

class ViTriRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ViTriService = app.$services.primary.ViTriService;
    this.ViTriMiddleware = app.$middlewares.primary.ViTriMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ViTriService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ViTriService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ViTriService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ViTriService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ViTriService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ViTriService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ViTriService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ViTriService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ViTriService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ViTriService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ViTriService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ViTriService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ViTriService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ViTriService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ViTriService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/vi_tri*",this.ViTriMiddleware.default)

    router.get('/api/v1/vi_tri', this.ViTriMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/vi_tri', this.ViTriMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/vi_tri/findOne', this.ViTriMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/vi_tri/groupby/:columnName', this.ViTriMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/vi_tri/distribution/:columnName', this.ViTriMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/vi_tri/distinct/:columnName', this.ViTriMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/vi_tri/aggregate/:columnName', this.ViTriMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/vi_tri/count', this.ViTriMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/vi_tri/bulk', this.ViTriMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/vi_tri/bulk', this.ViTriMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/vi_tri/bulk', this.ViTriMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/vi_tri/:id', this.ViTriMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/vi_tri/:id', this.ViTriMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/vi_tri/:id', this.ViTriMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/vi_tri/:id/exists', this.ViTriMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ViTriRouter;