
const variables = require('./variables');
const http = require('http');    
const { getAll } = require('../init/hubspot');

const app = require('../src/app');

const port = variables.port || 3000;

getAll().then((res) => {
    console.log(res);
    http.createServer(app).listen(port, () => {
        console.log('API running on port ' + port);
    });
})
    