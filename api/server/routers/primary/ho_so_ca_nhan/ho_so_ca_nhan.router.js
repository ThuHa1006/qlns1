const {
  BaseRouter
} = require('xc-core');

class HoSoCaNhanRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.HoSoCaNhanService = app.$services.primary.HoSoCaNhanService;
    this.HoSoCaNhanMiddleware = app.$middlewares.primary.HoSoCaNhanMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.HoSoCaNhanService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.HoSoCaNhanService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.HoSoCaNhanService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.HoSoCaNhanService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.HoSoCaNhanService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.HoSoCaNhanService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.HoSoCaNhanService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.HoSoCaNhanService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.HoSoCaNhanService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.HoSoCaNhanService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.HoSoCaNhanService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.HoSoCaNhanService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.HoSoCaNhanService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.HoSoCaNhanService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.HoSoCaNhanService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/ho_so_ca_nhan*",this.HoSoCaNhanMiddleware.default)

    router.get('/api/v1/ho_so_ca_nhan', this.HoSoCaNhanMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/ho_so_ca_nhan', this.HoSoCaNhanMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ho_so_ca_nhan/findOne', this.HoSoCaNhanMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/ho_so_ca_nhan/groupby/:columnName', this.HoSoCaNhanMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/ho_so_ca_nhan/distribution/:columnName', this.HoSoCaNhanMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/ho_so_ca_nhan/distinct/:columnName', this.HoSoCaNhanMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/ho_so_ca_nhan/aggregate/:columnName', this.HoSoCaNhanMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ho_so_ca_nhan/count', this.HoSoCaNhanMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/ho_so_ca_nhan/bulk', this.HoSoCaNhanMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/ho_so_ca_nhan/bulk', this.HoSoCaNhanMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/ho_so_ca_nhan/bulk', this.HoSoCaNhanMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/ho_so_ca_nhan/:id', this.HoSoCaNhanMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ho_so_ca_nhan/:id', this.HoSoCaNhanMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ho_so_ca_nhan/:id', this.HoSoCaNhanMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ho_so_ca_nhan/:id/exists', this.HoSoCaNhanMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = HoSoCaNhanRouter;