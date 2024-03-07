import joi from "joi";

const sport_form_validator = joi.object({
    Nom: joi.string().min(5).max(255).required().messages({
        'string.base': 'Le nom du sport doit être une chaîne de caractères',
        'string.empty': 'Le nom du sport ne doit pas être vide',
        'string.max': 'Le nom du sport ne doit pas dépasser 255 caractères',
        'string.min': 'Le nom du sport doit dépasser 5 caractères',
        'any.required': 'Le nom du sport est requis',
    }),
});

export default sport_form_validator;