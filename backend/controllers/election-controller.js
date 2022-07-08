import { Election, rules } from "../models/election.js";
import { validate } from "../utils/validator.js";
import {MemberElection, rules as elecRules} from "../models/member-election.js";
import { Member } from "../models/member.js";
import {MemberElectionVote,rules as voteRules} from "../models/member-election-vote.js"
import { User } from "../models/user.js";

class ElectionController {
	async all(req, res) {
		let elections = await Election.find();
		return res.send(elections);
	}

	async create(req, res) {
		let [passes, data] = validate(req.body, rules);

		if (!passes) {
			return res.status(400).send(data);
		}

		let election = await Election.create(req.body);
		return res.status(201).send(election);
	}

	async addMemberToElection(req, res) {
		let [passes, data] = validate(req.body, elecRules);



		if (!passes) {
			return res.status(400).send(data);
		}

		// verify that both member and election exist in db by id
		let member = await Member.findById(data.member_id);
		let election = await Election.findById(data.election_id);

		if(!member || !election) {
			const response = {};
			if(!member)
				response['member'] = 'No member found with that id';
			if(!election)
				response['election'] = 'No election found with that id';
			return res.status(400).send(response);
		}

		// verify that member is not already in election
		let memberElectionExists = await MemberElection.findOne({member_id: data.member_id, election_id: data.election_id});

		if(memberElectionExists) {
			return res.status(400).send({message: 'Member is already in election'});
		}

		let memberElection = await MemberElection.create(data);
		return res.status(201).send(memberElection);
	}

	async getElectionMembers(req,res){
		let election = await Election.findById(req.params.id);

		if(!election)
			return res.status(400).send({message: 'No election found with that id'});



		let members = await MemberElection.find({election_id: req.params.id});
		const newMembers  = []

		for(let member of members){
			console.log(member)
			const _m = {
				...member.toObject(),
				"member":await Member.findById(member.member_id)
			}
			newMembers.push(_m)
		}

		return res.send(newMembers);
	}

	async deleteElectionMemberByUserIdAndElectionMember(req,res){
		let memberElection = await MemberElection.findOne({member_id: req.params.member_id, election_id: req.params.election_id});
		return res.status(200).send(memberElection);
	}

	async electionVote(req,res){
		let [passes, data] = validate(req.body, voteRules);

		if (!passes) {
			return res.status(400).send(data);
		}

		let user = await User.findById(data.user_id);
		let memberElection = await MemberElection.findById(data.member_election_id);

		if(!user || !memberElection) {
			const response = {};
			if(!user)
				response['user'] = 'No user found with that id';
			if(!memberElection)
				response['memberElection'] = 'No memberElection found with that id';
			return res.status(400).send(response);
		}

		let memberElectionVoteExists = await MemberElectionVote.findOne({user_id: data.user_id, member_election_id: data.member_election_id});

		if(memberElectionVoteExists) {
			return res.status(400).send({message: 'User has already voted'});
		}

		//verify if user has not voted on same election
		let userVotedOnElection = await MemberElectionVote.findOne({user_id: data.user_id, election_id: memberElection.election_id});

		if(userVotedOnElection) {
			return res.status(400).send({message: 'User has already voted on this election'});
		}

		data['election_id'] = memberElection.election_id;

		let memberElectionVote = await MemberElectionVote.create(data);
		return res.status(201).send(memberElectionVote);
	}

	async countVotes(req,res){
		const electionId = req.params.election_id

		const electionMembers = await MemberElection.find({election_id:electionId})

		const electionMembersWithVotes = [];

		for(let elecMember of electionMembers){
			const _m = elecMember.toObject();
			_m['votes'] = await (await MemberElectionVote.find({member_election_id:_m._id})).length || 0;
			_m['member'] = await Member.findById(_m.member_id);
			
			console.log(_m)
			electionMembersWithVotes.push(_m)
		}

		res.status(200).send(electionMembersWithVotes)
	}

	async deleteElectionVote(req,res){
		let memberElectionVote = await MemberElectionVote.findOneAndDelete({user_id: req.params.user_id, member_election_id: req.params.memberelect_id});
		return res.status(200).send(memberElectionVote);

	}

}

export default new ElectionController();
