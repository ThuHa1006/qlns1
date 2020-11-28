const {
  BaseService
} = require('xc-core');

class LoaiDonTuService extends BaseService {

  constructor(app) {
    super(app);
    this.loai_don_tu = app.$dbs.primary.loai_don_tu;
  }

  async create(req, res) {
    let data = await this.loai_don_tu.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.loai_don_tu.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.loai_don_tu.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.loai_don_tu.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.loai_don_tu.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.loai_don_tu.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.loai_don_tu.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.loai_don_tu.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.loai_don_tu.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.loai_don_tu.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.loai_don_tu.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.loai_don_tu.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.loai_don_tu.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.loai_don_tu.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.loai_don_tu.delb(req.body);
    return data;
  }

}

module.exports = LoaiDonTuService;