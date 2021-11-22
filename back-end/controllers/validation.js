const Joi = require('joi');


const signUpValidation = (data) => {

    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        username: Joi.string().required(),
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required(),
    })

    return schema.validate(data)


}

const loginValidation = (data) => {

    const schema = Joi.object({
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data)


}

const commentValidation = (data) => {

    const schema = Joi.object({
        userName: Joi.string().min(6).required(),
        avatar: Joi.string().required(),
        content: Joi.string().min(5).required(),
        date: Joi.string().required(),
        post_id: Joi.string().required()
    })

    return schema.validate(data)

}

module.exports.signUpValidation = signUpValidation
module.exports.loginValidation = loginValidation
module.exports.commentValidation = commentValidation
