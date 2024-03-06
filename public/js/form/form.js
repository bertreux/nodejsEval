import config from "../config.js";

const form = document.querySelector('form');

const sendFormValueAndReturnResponse = (url, msg_status_201, msg_status_error) =>{
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const type = Object.fromEntries(new FormData(e.target));
        const requestInfos = new Request(`${config[config.env].api_url}/${url}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(type)
        });
        const request = await fetch(requestInfos);
        const response = await request.json();
        if(response.status !== 201){
            message.innerHTML = msg_status_error;
            message.className = 'message created';
            return;
        }
        message.innerHTML = msg_status_201;
        message.className = 'message created';
        e.target.reset();
    })
}

export default sendFormValueAndReturnResponse;
