const express = require("express");

const router = express.Router();

const db = require("../db");

router.post(
"/donate",
(req,res)=>{

    const {
        food_name,
        quantity,
        location,
        contact
    } = req.body;

    const sql = `
        INSERT INTO donations
        (food_name, quantity, location, contact)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [food_name, quantity, location, contact],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Donation Failed"
                });
            }

            res.json({
                success: true,
                message: "Donation Added Successfully"
            });
        }
    );
});

router.get("/donations", (req, res) => {

    const sql =
    "SELECT * FROM donations ORDER BY created_at DESC";

    db.query(sql, (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                success: false
            });
        }

        res.json({
            success: true,
            donations: result
        });
    });
});

module.exports = router;