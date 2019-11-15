const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// const Rappers = require('../data/rappers/rappers-model.js')

const server = express();

server.use(helmet())
server.use(express.json())
server.use(cors())

server.get('/', ( req, res ) => {
    res.status(200).json({ api: "running" })
})

module.exports = server;