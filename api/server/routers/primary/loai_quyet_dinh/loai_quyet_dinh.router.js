const {
  BaseRouter
} = require('xc-core');

class LoaiQuyetDinhRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LoaiQuyetDinhService = app.$services.primary.LoaiQuyetDinhService;
    this.LoaiQuyetDinhMiddleware = app.$middlewares.primary.LoaiQuyetDinhMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.LoaiQuyetDinhService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.LoaiQuyetDinhService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.LoaiQuyetDinhService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.LoaiQuyetDinhService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.LoaiQuyetDinhService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.LoaiQuyetDinhService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.LoaiQuyetDinhService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.LoaiQuyetDinhService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.LoaiQuyetDinhService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.LoaiQuyetDinhService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.LoaiQuyetDinhService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.LoaiQuyetDinhService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.LoaiQuyetDinhService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.LoaiQuyetDinhService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.LoaiQuyetDinhService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/loai_quyet_dinh*",this.LoaiQuyetDinhMiddleware.default)

    router.get('/api/v1/loai_quyet_dinh', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/loai_quyet_dinh', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/loai_quyet_dinh/findOne', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/loai_quyet_dinh/groupby/:columnName', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/loai_quyet_dinh/distribution/:columnName', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/loai_quyet_dinh/distinct/:columnName', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/loai_quyet_dinh/aggregate/:columnName', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/loai_quyet_dinh/count', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/loai_quyet_dinh/bulk', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/loai_quyet_dinh/bulk', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/loai_quyet_dinh/bulk', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/loai_quyet_dinh/:id', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/loai_quyet_dinh/:id', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/loai_quyet_dinh/:id', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/loai_quyet_dinh/:id/exists', this.LoaiQuyetDinhMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = LoaiQuyetDinhRouter;