const getDonations = (req, res) => {

    const sql =
    "SELECT * FROM donations ORDER BY created_at DESC";

    db.query(sql, (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false
            });
        }

        res.status(200).json({
            success: true,
            donations: result
        });
    });
};