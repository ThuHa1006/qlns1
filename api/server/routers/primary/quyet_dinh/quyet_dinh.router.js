const {
  BaseRouter
} = require('xc-core');

class QuyetDinhRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.QuyetDinhService = app.$services.primary.QuyetDinhService;
    this.QuyetDinhMiddleware = app.$middlewares.primary.QuyetDinhMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.QuyetDinhService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.QuyetDinhService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.QuyetDinhService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.QuyetDinhService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.QuyetDinhService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.QuyetDinhService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.QuyetDinhService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.QuyetDinhService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.QuyetDinhService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.QuyetDinhService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.QuyetDinhService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.QuyetDinhService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.QuyetDinhService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.QuyetDinhService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.QuyetDinhService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/quyet_dinh*",this.QuyetDinhMiddleware.default)

    router.get('/api/v1/quyet_dinh', this.QuyetDinhMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/quyet_dinh', this.QuyetDinhMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/quyet_dinh/findOne', this.QuyetDinhMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/quyet_dinh/groupby/:columnName', this.QuyetDinhMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/quyet_dinh/distribution/:columnName', this.QuyetDinhMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/quyet_dinh/distinct/:columnName', this.QuyetDinhMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/quyet_dinh/aggregate/:columnName', this.QuyetDinhMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/quyet_dinh/count', this.QuyetDinhMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/quyet_dinh/bulk', this.QuyetDinhMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/quyet_dinh/bulk', this.QuyetDinhMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/quyet_dinh/bulk', this.QuyetDinhMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/quyet_dinh/:id', this.QuyetDinhMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/quyet_dinh/:id', this.QuyetDinhMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/quyet_dinh/:id', this.QuyetDinhMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/quyet_dinh/:id/exists', this.QuyetDinhMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = QuyetDinhRouter;