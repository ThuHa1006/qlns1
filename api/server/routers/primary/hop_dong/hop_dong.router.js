const {
  BaseRouter
} = require('xc-core');

class HopDongRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.HopDongService = app.$services.primary.HopDongService;
    this.HopDongMiddleware = app.$middlewares.primary.HopDongMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.HopDongService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.HopDongService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.HopDongService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.HopDongService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.HopDongService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.HopDongService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.HopDongService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.HopDongService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.HopDongService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.HopDongService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.HopDongService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.HopDongService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.HopDongService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.HopDongService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.HopDongService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/hop_dong*",this.HopDongMiddleware.default)

    router.get('/api/v1/hop_dong', this.HopDongMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/hop_dong', this.HopDongMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/hop_dong/findOne', this.HopDongMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/hop_dong/groupby/:columnName', this.HopDongMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/hop_dong/distribution/:columnName', this.HopDongMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/hop_dong/distinct/:columnName', this.HopDongMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/hop_dong/aggregate/:columnName', this.HopDongMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/hop_dong/count', this.HopDongMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/hop_dong/bulk', this.HopDongMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/hop_dong/bulk', this.HopDongMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/hop_dong/bulk', this.HopDongMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/hop_dong/:id', this.HopDongMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/hop_dong/:id', this.HopDongMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/hop_dong/:id', this.HopDongMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/hop_dong/:id/exists', this.HopDongMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = HopDongRouter;