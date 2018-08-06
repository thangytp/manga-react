const { EXISTED_CODE, SUCCESS_CODE } = require('../../helper/ResponseCode');
import ResponseTemplate from '../../helper/ResponseTemplate';

class User {
	async list(req, res) {
		res.status(200).send('aaabbccc');
	}
	async test(req, res) {
		res.status(200).send(ResponseTemplate.success({"message": "Ngon", "data": "[]"}));
	}
}

const user = new User();
module.exports = user;