import sendFormValueAndReturnResponse from "../form.js";

const type_form = document.getElementById('type_url_api').value;
sendFormValueAndReturnResponse(`${type_form}`, "Connexion réussi");