const {
  BaseService
} = require('xc-core');

class NghiPhepService extends BaseService {

  constructor(app) {
    super(app);
    this.nghi_phep = app.$dbs.primary.nghi_phep;
  }

  async create(req, res) {
    let data = await this.nghi_phep.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.nghi_phep.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.nghi_phep.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.nghi_phep.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.nghi_phep.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.nghi_phep.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.nghi_phep.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.nghi_phep.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.nghi_phep.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.nghi_phep.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.nghi_phep.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.nghi_phep.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.nghi_phep.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.nghi_phep.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.nghi_phep.delb(req.body);
    return data;
  }

}

module.exports = NghiPhepService;