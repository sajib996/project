for (let i = 0; i < 2; i++) {
    const URL = "https://weblogin.grameenphone.com/backend/api/v1/otp";
    const data = {
        msisdn: '01774648644',
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(URL, options)
        .then(res => res.json())
        .then(data => console.log(data))
}