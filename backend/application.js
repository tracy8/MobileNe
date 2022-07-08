import express from "express";
import { router } from "./config/routes.js";
import swaggerJSDoc  from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express';


export class Application {
	run() {
		const app = express();

		const swaggerDefinition = {
			openapi: '3.0.0',
			info: {
				title: 'Voting App Rest Api documentation',
			  version: '1.0.0',
				description:
				  'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
				license: {
				  name: 'Licensed Under MIT',
				  url: 'https://spdx.org/licenses/MIT.html',
				},
				contact: {
				  name: 'Ntwari Clarance Liberi',
				  url: 'https://github.com/claranceliberi',
				},
			  },
			  servers: [
				{
				  url: 'http://localhost:8000',
				  description: 'Development server',
				},
			  ],
		};

		const options = {
			swaggerDefinition,
			// Paths to files containing OpenAPI definitions
			apis: ['./config/routes.js'],
		};

		const swaggerSpec = swaggerJSDoc(options);

		app.use(express.json());

		app.use(router);

		app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

		app.listen(process.env.PORT, () => {
			console.log("App running on port " + process.env.PORT);
		});
	}
}
