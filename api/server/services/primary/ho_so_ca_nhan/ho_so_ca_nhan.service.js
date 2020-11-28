const {
  BaseService
} = require('xc-core');

class HoSoCaNhanService extends BaseService {

  constructor(app) {
    super(app);
    this.ho_so_ca_nhan = app.$dbs.primary.ho_so_ca_nhan;
  }

  async create(req, res) {
    let data = await this.ho_so_ca_nhan.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.ho_so_ca_nhan.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.ho_so_ca_nhan.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.ho_so_ca_nhan.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.ho_so_ca_nhan.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.ho_so_ca_nhan.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.ho_so_ca_nhan.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.ho_so_ca_nhan.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.ho_so_ca_nhan.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.ho_so_ca_nhan.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.ho_so_ca_nhan.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.ho_so_ca_nhan.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.ho_so_ca_nhan.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.ho_so_ca_nhan.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.ho_so_ca_nhan.delb(req.body);
    return data;
  }

}

module.exports = HoSoCaNhanService;