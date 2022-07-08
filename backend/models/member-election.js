import mongoose from "mongoose";

const memberElectionSchema = new mongoose.Schema({
	member_id: {
		type: String,
		required: true,
	},
	election_id: {
		type: String,
		required: true,
	},
});

const MemberElection = mongoose.model("MemberElection", memberElectionSchema);

const rules = {
	member_id: "required",
	election_id: "required",
};

export { MemberElection, rules };
