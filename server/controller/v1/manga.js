const { EXISTED_CODE, SUCCESS_CODE } = require('../../helper/ResponseCode');
const ResponseTemplate = require('../../helper/ResponseTemplate');
const Manga = require('../../models/Manga');

class MangaController {
	async list(req, res) {
		try {
			let page = req.page || 0;
			let perpage = req.perpage || 50;

			let listManga = await Manga.fetchPage({
				pageSize: perpage,
				page: page,
			});
			console.log(listManga);
			return listManga;
		} catch (e) {
			console.log(e);
		}
	}

	async create(req, res) {

	}

	async retrieve(req, res) {
		let manga = await Manga.where().fetch();
		if (!manga) {

		}

		return res.status(200).send(ResponseTemplate.success());
	}

	async delete(req, res) {

	}
}

const mangaController = new MangaController();
module.exports = mangaController;