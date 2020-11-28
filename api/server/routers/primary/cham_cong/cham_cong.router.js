const {
  BaseRouter
} = require('xc-core');

class ChamCongRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ChamCongService = app.$services.primary.ChamCongService;
    this.ChamCongMiddleware = app.$middlewares.primary.ChamCongMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ChamCongService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ChamCongService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ChamCongService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ChamCongService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ChamCongService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ChamCongService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ChamCongService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ChamCongService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ChamCongService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ChamCongService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ChamCongService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ChamCongService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ChamCongService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ChamCongService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ChamCongService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/cham_cong*",this.ChamCongMiddleware.default)

    router.get('/api/v1/cham_cong', this.ChamCongMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/cham_cong', this.ChamCongMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/cham_cong/findOne', this.ChamCongMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/cham_cong/groupby/:columnName', this.ChamCongMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/cham_cong/distribution/:columnName', this.ChamCongMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/cham_cong/distinct/:columnName', this.ChamCongMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/cham_cong/aggregate/:columnName', this.ChamCongMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/cham_cong/count', this.ChamCongMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/cham_cong/bulk', this.ChamCongMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/cham_cong/bulk', this.ChamCongMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/cham_cong/bulk', this.ChamCongMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/cham_cong/:id', this.ChamCongMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/cham_cong/:id', this.ChamCongMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/cham_cong/:id', this.ChamCongMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/cham_cong/:id/exists', this.ChamCongMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ChamCongRouter;