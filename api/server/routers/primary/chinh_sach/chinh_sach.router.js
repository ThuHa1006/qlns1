const {
  BaseRouter
} = require('xc-core');

class ChinhSachRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ChinhSachService = app.$services.primary.ChinhSachService;
    this.ChinhSachMiddleware = app.$middlewares.primary.ChinhSachMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ChinhSachService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ChinhSachService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ChinhSachService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ChinhSachService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ChinhSachService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ChinhSachService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ChinhSachService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ChinhSachService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ChinhSachService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ChinhSachService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ChinhSachService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ChinhSachService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ChinhSachService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ChinhSachService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ChinhSachService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/chinh_sach*",this.ChinhSachMiddleware.default)

    router.get('/api/v1/chinh_sach', this.ChinhSachMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/chinh_sach', this.ChinhSachMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/chinh_sach/findOne', this.ChinhSachMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/chinh_sach/groupby/:columnName', this.ChinhSachMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/chinh_sach/distribution/:columnName', this.ChinhSachMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/chinh_sach/distinct/:columnName', this.ChinhSachMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/chinh_sach/aggregate/:columnName', this.ChinhSachMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/chinh_sach/count', this.ChinhSachMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/chinh_sach/bulk', this.ChinhSachMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/chinh_sach/bulk', this.ChinhSachMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/chinh_sach/bulk', this.ChinhSachMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/chinh_sach/:id', this.ChinhSachMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/chinh_sach/:id', this.ChinhSachMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/chinh_sach/:id', this.ChinhSachMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/chinh_sach/:id/exists', this.ChinhSachMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ChinhSachRouter;