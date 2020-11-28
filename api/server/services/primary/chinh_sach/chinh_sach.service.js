const {
  BaseService
} = require('xc-core');

class ChinhSachService extends BaseService {

  constructor(app) {
    super(app);
    this.chinh_sach = app.$dbs.primary.chinh_sach;
  }

  async create(req, res) {
    let data = await this.chinh_sach.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.chinh_sach.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.chinh_sach.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.chinh_sach.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.chinh_sach.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.chinh_sach.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.chinh_sach.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.chinh_sach.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.chinh_sach.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.chinh_sach.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.chinh_sach.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.chinh_sach.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.chinh_sach.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.chinh_sach.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.chinh_sach.delb(req.body);
    return data;
  }

}

module.exports = ChinhSachService;