const express = require("express");

const router = express.Router();

const db = require("../db");

router.post("/request", (req, res) => {

    // request insert code
});

router.get("/requests", (req, res) => {

    // get requests code
});

router.put("/update-request-status", (req, res) => {

    const { id, status } = req.body;

    const sql =
    "UPDATE requests SET status=? WHERE id=?";

    db.query(
        sql,
        [status, id],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false
                });
            }

            res.json({
                success: true,
                message: "Status Updated"
            });
        }
    );
});

module.exports = router;