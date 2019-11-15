const router = require("express").Router();
const Rappers = require("./rappers-model");


router.get("/rappers", (req, res) => {
  Rappers.find()
    .then(rappers => res.status(200).json(rappers))
    .catch(error => res.status(500).json({ message: "couldn't get rappers" }));
});

module.exports = router;
