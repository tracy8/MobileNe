import { mongoose } from "mongoose";

mongoose
	.connect("mongodb+srv://tracy:tracymongo@cluster0.jvibay1.mongodb.net/vote?retryWrites=true&w=majority")
	.then((res) => {
		console.log("Connected to the database");
	})
	.catch((e) => {
		console.log("Failed to connect to the database");
		// process.exit(0);
	});

import "../models/user.js";
import "../models/election.js";
import "../models/member.js";
import "../models/member-election-vote.js";
import "../models/member-election.js"
