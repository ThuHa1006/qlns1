const {
  BaseRouter
} = require('xc-core');

class NhomNguoiDungRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.NhomNguoiDungService = app.$services.primary.NhomNguoiDungService;
    this.NhomNguoiDungMiddleware = app.$middlewares.primary.NhomNguoiDungMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NhomNguoiDungService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NhomNguoiDungService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NhomNguoiDungService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NhomNguoiDungService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NhomNguoiDungService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NhomNguoiDungService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NhomNguoiDungService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NhomNguoiDungService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NhomNguoiDungService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NhomNguoiDungService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NhomNguoiDungService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NhomNguoiDungService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NhomNguoiDungService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NhomNguoiDungService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NhomNguoiDungService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/nhom_nguoi_dung*",this.NhomNguoiDungMiddleware.default)

    router.get('/api/v1/nhom_nguoi_dung', this.NhomNguoiDungMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/nhom_nguoi_dung', this.NhomNguoiDungMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/nhom_nguoi_dung/findOne', this.NhomNguoiDungMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/nhom_nguoi_dung/groupby/:columnName', this.NhomNguoiDungMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/nhom_nguoi_dung/distribution/:columnName', this.NhomNguoiDungMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/nhom_nguoi_dung/distinct/:columnName', this.NhomNguoiDungMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/nhom_nguoi_dung/aggregate/:columnName', this.NhomNguoiDungMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/nhom_nguoi_dung/count', this.NhomNguoiDungMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/nhom_nguoi_dung/bulk', this.NhomNguoiDungMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/nhom_nguoi_dung/bulk', this.NhomNguoiDungMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/nhom_nguoi_dung/bulk', this.NhomNguoiDungMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/nhom_nguoi_dung/:id', this.NhomNguoiDungMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/nhom_nguoi_dung/:id', this.NhomNguoiDungMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/nhom_nguoi_dung/:id', this.NhomNguoiDungMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/nhom_nguoi_dung/:id/exists', this.NhomNguoiDungMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = NhomNguoiDungRouter;