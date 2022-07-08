import { rules, Member } from "../models/member.js";
import { validate } from "../utils/validator.js";

class MemberController {
	async all(req, res) {
		let members = await Member.find();

		return res.send(members);
	}

	async create(req, res) {
		console.log(req.user)
		let [passes, data] = validate(req.body, rules);

		if (!passes) {
			return res.status(400).send(data);
		}

		let member = await Member.create(data);

		return res.status(400).send(member);
	}

	async delete(req, res) {
		let member = await Member.findByIdAndDelete(req.params.id);

		return res.send(member);
	}
}

export default new MemberController();
