const {
  BaseRouter
} = require('xc-core');

class LoaiHopDongRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LoaiHopDongService = app.$services.primary.LoaiHopDongService;
    this.LoaiHopDongMiddleware = app.$middlewares.primary.LoaiHopDongMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.LoaiHopDongService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.LoaiHopDongService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.LoaiHopDongService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.LoaiHopDongService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.LoaiHopDongService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.LoaiHopDongService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.LoaiHopDongService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.LoaiHopDongService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.LoaiHopDongService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.LoaiHopDongService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.LoaiHopDongService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.LoaiHopDongService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.LoaiHopDongService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.LoaiHopDongService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.LoaiHopDongService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/loai_hop_dong*",this.LoaiHopDongMiddleware.default)

    router.get('/api/v1/loai_hop_dong', this.LoaiHopDongMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/loai_hop_dong', this.LoaiHopDongMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/loai_hop_dong/findOne', this.LoaiHopDongMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/loai_hop_dong/groupby/:columnName', this.LoaiHopDongMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/loai_hop_dong/distribution/:columnName', this.LoaiHopDongMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/loai_hop_dong/distinct/:columnName', this.LoaiHopDongMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/loai_hop_dong/aggregate/:columnName', this.LoaiHopDongMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/loai_hop_dong/count', this.LoaiHopDongMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/loai_hop_dong/bulk', this.LoaiHopDongMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/loai_hop_dong/bulk', this.LoaiHopDongMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/loai_hop_dong/bulk', this.LoaiHopDongMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/loai_hop_dong/:id', this.LoaiHopDongMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/loai_hop_dong/:id', this.LoaiHopDongMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/loai_hop_dong/:id', this.LoaiHopDongMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/loai_hop_dong/:id/exists', this.LoaiHopDongMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = LoaiHopDongRouter;