const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {

    const {
        full_name,
        email_phone,
        password,
        user_type
    } = req.body;

    try {

        const hashedPassword =
            await bcrypt.hash(
                password,
                10
            );

        const sql = `
            INSERT INTO users
            (
                full_name,
                email_phone,
                password,
                user_type
            )
            VALUES (?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                full_name,
                email_phone,
                hashedPassword,
                user_type
            ],
            (err, result) => {

                if(err){

                    console.log(err);

                    return res.status(500).json({
                        success:false
                    });
                }

                res.json({
                    success:true,
                    message:"Registration Successful"
                });

            }
        );

    }
    catch(error){

        console.log(error);

        res.status(500).json({
            success:false
        });

    }

};

const loginUser = (req, res) => {

    const {
        email_phone,
        password
    } = req.body;

    const sql =
        `
        SELECT *
        FROM users
        WHERE email_phone=?
        `;

    db.query(
        sql,
        [email_phone],
        async(err,result)=>{

            if(
                err
                ||
                result.length===0
            ){

                return res.status(401)
                .json({
                    success:false
                });

            }

            const user =
                result[0];

            const match =
                await bcrypt.compare(
                    password,
                    user.password
                );

            if(!match){

                return res.status(401)
                .json({
                    success:false,
                    message:"Wrong Password"
                });

            }

            const token =
                jwt.sign(

                {
                    id:user.id,
                    email:user.email_phone
                },

                "hope_secret_key"

            );

            res.json({

                success:true,
                token:token,
                message:"Login Successful"

            });

        }
    );

};

module.exports = {

    registerUser,
    loginUser

};