const {
  BaseRouter
} = require('xc-core');

class BoPhanRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoPhanService = app.$services.primary.BoPhanService;
    this.BoPhanMiddleware = app.$middlewares.primary.BoPhanMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BoPhanService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BoPhanService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BoPhanService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BoPhanService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BoPhanService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BoPhanService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BoPhanService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BoPhanService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BoPhanService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BoPhanService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BoPhanService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BoPhanService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BoPhanService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BoPhanService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BoPhanService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/bo_phan*",this.BoPhanMiddleware.default)

    router.get('/api/v1/bo_phan', this.BoPhanMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/bo_phan', this.BoPhanMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/bo_phan/findOne', this.BoPhanMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/bo_phan/groupby/:columnName', this.BoPhanMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/bo_phan/distribution/:columnName', this.BoPhanMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/bo_phan/distinct/:columnName', this.BoPhanMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/bo_phan/aggregate/:columnName', this.BoPhanMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/bo_phan/count', this.BoPhanMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/bo_phan/bulk', this.BoPhanMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/bo_phan/bulk', this.BoPhanMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/bo_phan/bulk', this.BoPhanMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/bo_phan/:id', this.BoPhanMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/bo_phan/:id', this.BoPhanMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/bo_phan/:id', this.BoPhanMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/bo_phan/:id/exists', this.BoPhanMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BoPhanRouter;