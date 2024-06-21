const healthCheck = (req,res) =>{
    res.send("app running");
}

module.exports = healthCheck;