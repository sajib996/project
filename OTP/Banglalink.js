for (let i = 0; i < 2; i++) {
    const URL = "https://eshop-api.banglalink.net/api/v1/customer/send-otp";
    const data = {
        phone: '01969528994',
        type: "phone"
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