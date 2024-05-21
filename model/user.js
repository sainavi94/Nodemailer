const Ajv = require('ajv');
const ajv = new Ajv();

const userSchema = {
    type: "object",
    properties: {
      firstName: {type: "string"},
      lastName: {type: "string"},
      userName:{type:"string"},
      email:{type:"string"},
      password:{type:"string"},
    },
    required: ["firstName","lastName","userName","email","password"],
    additionalProperties: false,
}
  

  
const validation = async(payload) => {
    const validate = ajv.compile(userSchema)
    const valid = validate(payload)
    if (!valid){
        console.log(validate.errors)
        return false;
    };
    return true;
}

module.exports = validation;
