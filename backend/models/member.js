import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
	names: {
		type: String,
		required: true,
	},
	dob: {
		type: String,
		required: true,
	},
});

const Member = mongoose.model("Member", memberSchema);

const rules = {
	names: "required",
	dob: "required",
};

export { Member, rules };
