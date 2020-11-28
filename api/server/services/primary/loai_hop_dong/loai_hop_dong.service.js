const {
  BaseService
} = require('xc-core');

class LoaiHopDongService extends BaseService {

  constructor(app) {
    super(app);
    this.loai_hop_dong = app.$dbs.primary.loai_hop_dong;
  }

  async create(req, res) {
    let data = await this.loai_hop_dong.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.loai_hop_dong.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.loai_hop_dong.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.loai_hop_dong.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.loai_hop_dong.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.loai_hop_dong.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.loai_hop_dong.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.loai_hop_dong.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.loai_hop_dong.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.loai_hop_dong.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.loai_hop_dong.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.loai_hop_dong.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.loai_hop_dong.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.loai_hop_dong.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.loai_hop_dong.delb(req.body);
    return data;
  }

}

module.exports = LoaiHopDongService;