const {
  BaseRouter
} = require('xc-core');

class LoaiPhuCapRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LoaiPhuCapService = app.$services.primary.LoaiPhuCapService;
    this.LoaiPhuCapMiddleware = app.$middlewares.primary.LoaiPhuCapMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.LoaiPhuCapService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.LoaiPhuCapService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.LoaiPhuCapService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.LoaiPhuCapService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.LoaiPhuCapService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.LoaiPhuCapService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.LoaiPhuCapService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.LoaiPhuCapService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.LoaiPhuCapService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.LoaiPhuCapService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.LoaiPhuCapService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.LoaiPhuCapService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.LoaiPhuCapService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.LoaiPhuCapService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.LoaiPhuCapService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/loai_phu_cap*",this.LoaiPhuCapMiddleware.default)

    router.get('/api/v1/loai_phu_cap', this.LoaiPhuCapMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/loai_phu_cap', this.LoaiPhuCapMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/loai_phu_cap/findOne', this.LoaiPhuCapMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/loai_phu_cap/groupby/:columnName', this.LoaiPhuCapMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/loai_phu_cap/distribution/:columnName', this.LoaiPhuCapMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/loai_phu_cap/distinct/:columnName', this.LoaiPhuCapMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/loai_phu_cap/aggregate/:columnName', this.LoaiPhuCapMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/loai_phu_cap/count', this.LoaiPhuCapMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/loai_phu_cap/bulk', this.LoaiPhuCapMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/loai_phu_cap/bulk', this.LoaiPhuCapMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/loai_phu_cap/bulk', this.LoaiPhuCapMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/loai_phu_cap/:id', this.LoaiPhuCapMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/loai_phu_cap/:id', this.LoaiPhuCapMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/loai_phu_cap/:id', this.LoaiPhuCapMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/loai_phu_cap/:id/exists', this.LoaiPhuCapMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = LoaiPhuCapRouter;