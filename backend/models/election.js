import mongoose from "mongoose";

const electionSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
});

const Election = mongoose.model("Election", electionSchema);

const rules = {
	title: "required|string|min:3",
};

export { Election, rules };
