import titre_form_validator from "../../validator/titre_form_validator.js";

const titre_form_middleware = (req, res, next) => {
    const validate = titre_form_validator.validate(req.body);
    if(validate.error){
        return res.status(400).json({
            status: 400,
            message: 'Error',
            errors: validate.error.details.map((value) => value.message),
        })
    }

    next();
}

export default titre_form_middleware;