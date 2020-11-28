const {
  BaseRouter
} = require('xc-core');

class TuyenDungRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.TuyenDungService = app.$services.primary.TuyenDungService;
    this.TuyenDungMiddleware = app.$middlewares.primary.TuyenDungMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.TuyenDungService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.TuyenDungService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.TuyenDungService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.TuyenDungService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.TuyenDungService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.TuyenDungService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.TuyenDungService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.TuyenDungService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.TuyenDungService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.TuyenDungService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.TuyenDungService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.TuyenDungService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.TuyenDungService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.TuyenDungService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.TuyenDungService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/tuyen_dung*",this.TuyenDungMiddleware.default)

    router.get('/api/v1/tuyen_dung', this.TuyenDungMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/tuyen_dung', this.TuyenDungMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/tuyen_dung/findOne', this.TuyenDungMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/tuyen_dung/groupby/:columnName', this.TuyenDungMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/tuyen_dung/distribution/:columnName', this.TuyenDungMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/tuyen_dung/distinct/:columnName', this.TuyenDungMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/tuyen_dung/aggregate/:columnName', this.TuyenDungMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/tuyen_dung/count', this.TuyenDungMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/tuyen_dung/bulk', this.TuyenDungMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/tuyen_dung/bulk', this.TuyenDungMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/tuyen_dung/bulk', this.TuyenDungMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/tuyen_dung/:id', this.TuyenDungMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/tuyen_dung/:id', this.TuyenDungMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/tuyen_dung/:id', this.TuyenDungMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/tuyen_dung/:id/exists', this.TuyenDungMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = TuyenDungRouter;