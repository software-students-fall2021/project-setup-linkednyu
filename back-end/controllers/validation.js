const Joi = require('joi');


const signUpValidation = (data)=>{

    const schema = Joi.object( {
        name:Joi.string().min(6).required(),
        username:Joi.string().required(),
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required(),
    })

   return schema.validate(data)


}

const loginValidation = (data)=>{

    const schema = Joi.object( {
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required()
    })

   return schema.validate(data)
}

const postValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        coursename: Joi.string().required()
    }).options({allowUnknown: true})

    console.log(schema.validate(data))

    return schema.validate(data)
}

module.exports.signUpValidation = signUpValidation
module.exports.loginValidation = loginValidation
module.exports.postValidation = postValidation
