import sendFormValueAndReturnResponse from "../form.js";

const type_form = document.getElementById('type_url_api').value;
sendFormValueAndReturnResponse(`gestion/titre/${type_form}`, "Le titre a été créé");