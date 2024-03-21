function repeat(repeat_num) {
    for (let r = 0; r < repeat_num; r++) {
        function generateOTP(length) {
            const number = "0123456789";
            let OTP = '';
            for (let i = 0; i < length; i++) {
                const random = Math.floor(Math.random() * number.length);
                OTP += number.charAt(random);
            }
            return OTP;
        }

        const result = generateOTP(6);

        const apiUrl = 'https://sajib0.xyz/mail.php/';


        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            },
            body: new URLSearchParams({
                code: '12345678',
                email: 'mohammadsajib996@gmail.com',
                subject: 'OTP',
                message: `${result} Your One Time Password`,
            }).toString(),
        };

        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

repeat(10);
