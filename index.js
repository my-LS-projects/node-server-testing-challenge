const server = require('./api/server')
const PORT = 8000;

server.listen(PORT, () => {
    console.log(`\n server listening on ${PORT}... \n`)
})