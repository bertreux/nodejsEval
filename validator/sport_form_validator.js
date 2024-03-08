import joi from "joi";

const sport_form_validator = joi.object({
    Nom: joi.string().min(5).max(255).required().messages({
        'string.base': 'Le nom du sport doit être une chaîne de caractères',
        'string.empty': 'Le nom du sport ne doit pas être vide',
        'string.max': 'Le nom du sport ne doit pas dépasser 255 caractères',
        'string.min': 'Le nom du sport doit dépasser 5 caractères',
        'any.required': 'Le nom du sport est requis',
    }),
    Image: joi.string().min(5).max(255).required().messages({
        'string.base': 'L\'url de l\'image doit être une chaîne de caractères',
        'string.empty': 'L\'url de l\'image ne doit pas être vide',
        'string.max': 'L\'url de l\'image ne doit pas dépasser 255 caractères',
        'string.min': 'L\'url de l\'image doit etre supérieur à 5 caractères',
        'any.required': 'L\'url de l\'image est requis',
    }),
}).options({ convert: true, abortEarly: false, stripUnknown: true });

export default sport_form_validator;