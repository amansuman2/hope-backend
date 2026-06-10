const jwt=require("jsonwebtoken");

const verifyToken=(req,res,next)=>{

const token=
req.headers.authorization;

if(!token){

return res.status(401)
.json({
message:"No Token"
});
}

try{

const verified=
jwt.verify(
token,
"hope_secret_key"
);

req.user=verified;

next();

}
catch{

res.status(401)
.json({
message:"Invalid Token"
});
}

};

module.exports=verifyToken;