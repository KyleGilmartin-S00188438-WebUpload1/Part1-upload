const express = require("express");

const { db } = require('../models/PlayerService');

const router = express.Router();


router.post('/', (req, res) => {
    db.CreatePlayer(req, res);
})

router.get('/', (req, res) => {
    db.ReadPlayers(req, res);
})

router.get('/:id', (req, res) => {
    db.ReadPlayer(req, res);
})

router.delete('/:id', (req, res) => {
    db.DeletePlayer(req, res);
})

module.exports = router;
//export default router;