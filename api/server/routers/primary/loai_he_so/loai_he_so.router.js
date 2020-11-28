const {
  BaseRouter
} = require('xc-core');

class LoaiHeSoRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LoaiHeSoService = app.$services.primary.LoaiHeSoService;
    this.LoaiHeSoMiddleware = app.$middlewares.primary.LoaiHeSoMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.LoaiHeSoService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.LoaiHeSoService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.LoaiHeSoService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.LoaiHeSoService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.LoaiHeSoService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.LoaiHeSoService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.LoaiHeSoService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.LoaiHeSoService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.LoaiHeSoService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.LoaiHeSoService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.LoaiHeSoService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.LoaiHeSoService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.LoaiHeSoService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.LoaiHeSoService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.LoaiHeSoService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/loai_he_so*",this.LoaiHeSoMiddleware.default)

    router.get('/api/v1/loai_he_so', this.LoaiHeSoMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/loai_he_so', this.LoaiHeSoMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/loai_he_so/findOne', this.LoaiHeSoMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/loai_he_so/groupby/:columnName', this.LoaiHeSoMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/loai_he_so/distribution/:columnName', this.LoaiHeSoMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/loai_he_so/distinct/:columnName', this.LoaiHeSoMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/loai_he_so/aggregate/:columnName', this.LoaiHeSoMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/loai_he_so/count', this.LoaiHeSoMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/loai_he_so/bulk', this.LoaiHeSoMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/loai_he_so/bulk', this.LoaiHeSoMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/loai_he_so/bulk', this.LoaiHeSoMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/loai_he_so/:id', this.LoaiHeSoMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/loai_he_so/:id', this.LoaiHeSoMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/loai_he_so/:id', this.LoaiHeSoMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/loai_he_so/:id/exists', this.LoaiHeSoMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = LoaiHeSoRouter;