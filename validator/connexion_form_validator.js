import joi from "joi";

const connexion_form_validator =  joi.object({
    email: joi.string().email().min(5).max(255).required().messages({
        'string.base': "L'email doit être une chaîne de caractères",
        'string.empty': "L'email ne doit pas être vide",
        'string.email': "L'email doit être au format email valide",
        'string.max': "L'email ne doit pas dépasser 255 caractères",
        'string.min': "L'email doit dépasser 5 caractères",
        'any.required': "L'email est requis",
    }),
    pwd: joi.string().min(5).max(255).required().messages({
        'string.base': "Le mot de passe doit être une chaîne de caractères",
        'string.empty': "Le mot de passe ne doit pas être vide",
        'string.max': "Le mot de passe ne doit pas dépasser 255 caractères",
        'string.min': "Le mot de passe doit dépasser 5 caractères",
        'any.required': "Le mot de passe est requis",
    })
}).options({ convert: true, abortEarly: false, stripUnknown: true });

export default connexion_form_validator;