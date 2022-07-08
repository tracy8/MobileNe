import { Router } from "express";

import electionController from "../controllers/election-controller.js";
import authController from "../controllers/auth-controller.js";
import memberController from "../controllers/member-controller.js";
import userController from "../controllers/user-controller.js";
import { authMiddleware, isAdmin } from "../middlewares/auth-middleware.js";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Test server
 *     description: Test that server is working.
*/
router.get("/", (req, res) => {
	return res.send("App not working");
});

/**
 * Article Controller related endpoints
 */
/**
 * @swagger
 * /elections:
 *   get:
 *     description: Returns elections 
 *     tags:
 *      - Members
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: elections
 */
router.get("/api/elections" ,electionController.all);
/**
 * @swagger
 * /elections:
 *   post:
 *     description: Add Election , a pool of elections that can be used to attach candidates
 *     tags: [Elections]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: election member
 */
router.post("/api/elections", authMiddleware,isAdmin ,electionController.create);
/**
 * @swagger
 * /elections/add-member:
 *   post:
 *     description: Add member to elections , add someone to be voted 
 *     tags: [Elections]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: election member
 */
router.post("/api/elections/add-member",authMiddleware ,isAdmin, electionController.addMemberToElection);

/**
 * @swagger
 * /elections/{election_id}/votes:
 *   get:
 *     description: get total votes on election
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Mongo db object id of an election
 *     tags:
 *      - Elections
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: election total votes
 */
router.get("/api/elections/:id/members" , electionController.getElectionMembers);
router.delete("/api/elections/member/:member_id/election/:election_id",authMiddleware , electionController.deleteElectionMemberByUserIdAndElectionMember);
/**
 * @swagger
 * /elections/vote:
 *   post:
 *     description: Returns Vote 
 *     tags: [Elections]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: vote for election member
 */
router.post("/api/elections/vote",authMiddleware , electionController.electionVote);
/**
 * @swagger
 * /elections/{election_id}/votes:
 *   get:
 *     description: get total votes on election
 *     tags:
 *      - Elections
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: election total votes
 */
router.get("/api/elections/:election_id/votes" ,electionController.countVotes);
/**
 * @swagger
 * /elections/vote/user/{user_id}/memberelect/{memberelect_id}:
 *   delete:
 *     description: delete vote
 *     tags:
 *      - Elections
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: deleted vote
 */
router.delete("/api/elections/vote/user/:user_id/memberelect/:memberelect_id",authMiddleware , electionController.deleteElectionVote);

/**
 * Auth Conroller related Endpoints
 */
  /**
   * @swagger
   * /auth/login:
   *   post:
   *     description: Returns authenticated user ant his token
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: authentication user
   */
router.post("/api/auth/login", authController.login);
/**
 * @swagger
 * /auth/register:
 *   post:
 *     description: Returns   registered user
 *     tags: [Auth]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: authentication user
 */
router.post("/api/auth/register", authController.register);
/**
 * @swagger
 * /auth/register/admin:
 *   post:
 *     description: Returns   registered user
 *     tags: [Auth]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: authentication user
 */
 router.post("/api/auth/register/admin", authController.registerAdmin);
/**
 * @swagger
 * /auth/profile:
 *   get:
 *     description: authenticated user
 *     tags: [Auth]
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: user
 */
router.get("/api/auth/profile", authMiddleware, authController.profile);

/**
 * Users Conroller related Endpoints
 */
/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns users
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 */
router.get("/api/users",authMiddleware , userController.all);

/**
 *
 * Todos Controller related Endpoints
 */
/**
 * @swagger
 * /members:
 *   get:
 *     description: Returns members
 *     tags:
 *      - Members
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: members
 */
router.get("/api/members",authMiddleware, memberController.all);
  /**
   * @swagger
   * /members:
   *   post:
   *     description: Returns members who can be added to votes
   *     tags: [Members]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: members
   */
router.post("/api/members", authMiddleware,isAdmin, memberController.create);
router.delete("/api/members/:id", authMiddleware,memberController.delete);



/**
   * @swagger
   * tags:
   *   - name: Auth
   *     description: Authentication 
   *   - name: Users
   *     description: users
   *   - name: Elections
   *     description: elections
   *   - name: Members
   *     description: members
   */

export { router };
