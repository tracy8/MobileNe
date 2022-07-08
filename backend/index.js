const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const swaggerUi = require('swagger-ui-express');
const swaggerDocumentation = require('./helpers/swaggerDocumentation');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));

const port = 8000;

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);

});
