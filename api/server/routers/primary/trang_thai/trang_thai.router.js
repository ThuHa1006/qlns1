const {
  BaseRouter
} = require('xc-core');

class TrangThaiRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.TrangThaiService = app.$services.primary.TrangThaiService;
    this.TrangThaiMiddleware = app.$middlewares.primary.TrangThaiMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.TrangThaiService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.TrangThaiService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.TrangThaiService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.TrangThaiService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.TrangThaiService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.TrangThaiService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.TrangThaiService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.TrangThaiService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.TrangThaiService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.TrangThaiService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.TrangThaiService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.TrangThaiService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.TrangThaiService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.TrangThaiService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.TrangThaiService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/trang_thai*",this.TrangThaiMiddleware.default)

    router.get('/api/v1/trang_thai', this.TrangThaiMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/trang_thai', this.TrangThaiMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/trang_thai/findOne', this.TrangThaiMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/trang_thai/groupby/:columnName', this.TrangThaiMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/trang_thai/distribution/:columnName', this.TrangThaiMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/trang_thai/distinct/:columnName', this.TrangThaiMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/trang_thai/aggregate/:columnName', this.TrangThaiMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/trang_thai/count', this.TrangThaiMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/trang_thai/bulk', this.TrangThaiMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/trang_thai/bulk', this.TrangThaiMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/trang_thai/bulk', this.TrangThaiMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/trang_thai/:id', this.TrangThaiMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/trang_thai/:id', this.TrangThaiMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/trang_thai/:id', this.TrangThaiMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/trang_thai/:id/exists', this.TrangThaiMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = TrangThaiRouter;