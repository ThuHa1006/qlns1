const {
  BaseService
} = require('xc-core');

class LoaiQuyetDinhService extends BaseService {

  constructor(app) {
    super(app);
    this.loai_quyet_dinh = app.$dbs.primary.loai_quyet_dinh;
  }

  async create(req, res) {
    let data = await this.loai_quyet_dinh.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.loai_quyet_dinh.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.loai_quyet_dinh.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.loai_quyet_dinh.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.loai_quyet_dinh.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.loai_quyet_dinh.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.loai_quyet_dinh.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.loai_quyet_dinh.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.loai_quyet_dinh.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.loai_quyet_dinh.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.loai_quyet_dinh.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.loai_quyet_dinh.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.loai_quyet_dinh.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.loai_quyet_dinh.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.loai_quyet_dinh.delb(req.body);
    return data;
  }

}

module.exports = LoaiQuyetDinhService;