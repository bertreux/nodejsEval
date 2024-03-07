import pays_form_validator from "../../validator/pays_form_validator.js";

const pays_form_middleware = (req, res, next) => {
    const validate = pays_form_validator.validate(req, req.body, { abortEarly: false });
    if(validate.error){
        return res.status(400).json({
            status: 400,
            message: 'Error',
            errors: validate.error.details.map((value) => value.message),
        })
    }

    next();
}

export default pays_form_middleware;