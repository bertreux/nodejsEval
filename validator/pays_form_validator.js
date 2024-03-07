import joi from "joi";

const pays_form_validator = joi.object({
    Nom: joi.string().min(5).max(255).required().messages({
        'string.base': "Le nom du pays doit être une chaîne de caractères",
        'string.empty': "Le nom du pays ne doit pas être vide",
        'string.max': "Le nom du pays ne doit pas dépasser 255 caractères",
        'string.min': "Le nom du pays doit dépasser 5 caractères",
        'any.required': "Le nom du pays est requis",
    }),
}).options({ convert: true, abortEarly: false, stripUnknown: true });

export default pays_form_validator;