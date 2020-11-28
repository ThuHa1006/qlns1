const {
  BaseRouter
} = require('xc-core');

class NghiPhepRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.NghiPhepService = app.$services.primary.NghiPhepService;
    this.NghiPhepMiddleware = app.$middlewares.primary.NghiPhepMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NghiPhepService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NghiPhepService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NghiPhepService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NghiPhepService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NghiPhepService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NghiPhepService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NghiPhepService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NghiPhepService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NghiPhepService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NghiPhepService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NghiPhepService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NghiPhepService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NghiPhepService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NghiPhepService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NghiPhepService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/nghi_phep*",this.NghiPhepMiddleware.default)

    router.get('/api/v1/nghi_phep', this.NghiPhepMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/nghi_phep', this.NghiPhepMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/nghi_phep/findOne', this.NghiPhepMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/nghi_phep/groupby/:columnName', this.NghiPhepMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/nghi_phep/distribution/:columnName', this.NghiPhepMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/nghi_phep/distinct/:columnName', this.NghiPhepMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/nghi_phep/aggregate/:columnName', this.NghiPhepMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/nghi_phep/count', this.NghiPhepMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/nghi_phep/bulk', this.NghiPhepMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/nghi_phep/bulk', this.NghiPhepMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/nghi_phep/bulk', this.NghiPhepMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/nghi_phep/:id', this.NghiPhepMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/nghi_phep/:id', this.NghiPhepMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/nghi_phep/:id', this.NghiPhepMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/nghi_phep/:id/exists', this.NghiPhepMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = NghiPhepRouter;