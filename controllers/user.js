const info = require('../utilies/email');
const validation = require('../model/user');



const signUp = async(req,res) => {

    const payload = req.body;
    const isValid = await validation(payload);
    const data = await info(req.body.email)
    
    try{
        if(!isValid){
            return res.status(400).send("Invald Schema");
        }
        return res.status(201).json({
            user:payload
        });

    }catch(e){
        return res.status(500).send(e.msg)
    }
    
}

module.exports = signUp;