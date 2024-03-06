import sendFormValueAndReturnResponse from "../form.js";

const type_form = document.getElementById('type_url_api').value;
sendFormValueAndReturnResponse(`gestion/athlete/${type_form}`, 'Created', 'Error');

