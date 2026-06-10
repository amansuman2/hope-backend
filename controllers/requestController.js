const db = require("../db");

const sendRequest = (req, res) => {

    const {
        receiver_name,
        food_needed,
        quantity,
        location,
        contact
    } = req.body;

    const sql = `
        INSERT INTO requests
        (
            receiver_name,
            food_needed,
            quantity,
            location,
            contact
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            receiver_name,
            food_needed,
            quantity,
            location,
            contact
        ],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Request Failed"
                });
            }

            res.json({
                success: true,
                message: "Request Sent Successfully"
            });
        }
    );
};

const getRequests = (req, res) => {

    const sql = `
        SELECT * FROM requests
        ORDER BY created_at DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                success: false
            });
        }

        res.json({
            success: true,
            requests: results
        });
    });
};

const updateRequestStatus = (req, res) => {

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
};

module.exports = {
    sendRequest,
    getRequests,
    updateRequestStatus
};