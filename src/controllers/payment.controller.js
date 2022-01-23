const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
    try {
        return res.render("Payment");
    } catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
})

module.exports = router;