import config from "../config.js";

const form = document.querySelector('form');
const message = document.querySelector('.message');

const sendFormValueAndReturnResponse = (url, msg_status_201) =>{
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
            message.innerHTML = response.errors.join('<br>');
            message.className = 'message alert alert-danger';
            return;
        }
        message.innerHTML = msg_status_201;
        message.className = 'message alert alert-success';
        e.target.reset();
    })
}

export default sendFormValueAndReturnResponse;
