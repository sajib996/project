const number = '01602830626';
const api = 'https://api.busbd.com.bd/api/auth'

const data = {
    phone: number
}

const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
}

fetch(api, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))