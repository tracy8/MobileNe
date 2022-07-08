import mongoose from "mongoose";

const memberElectionVoteSchema = new mongoose.Schema({
	member_election_id: {
		type: String,
		required: true,
	},
    user_id:{
        type: String,
		required: true,
    },
    election_id:{
        type: String,
        required: true,
    }
});

const MemberElectionVote = mongoose.model("MemberElectionVote", memberElectionVoteSchema);

const rules = {
	member_election_id: "required",
	user_id: "required",
};

export { MemberElectionVote, rules };
