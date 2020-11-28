const {
  BaseService
} = require('xc-core');

class LoaiHeSoService extends BaseService {

  constructor(app) {
    super(app);
    this.loai_he_so = app.$dbs.primary.loai_he_so;
  }

  async create(req, res) {
    let data = await this.loai_he_so.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.loai_he_so.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.loai_he_so.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.loai_he_so.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.loai_he_so.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.loai_he_so.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.loai_he_so.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.loai_he_so.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.loai_he_so.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.loai_he_so.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.loai_he_so.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.loai_he_so.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.loai_he_so.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.loai_he_so.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.loai_he_so.delb(req.body);
    return data;
  }

}

module.exports = LoaiHeSoService;