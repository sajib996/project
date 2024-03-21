function otpSend() {
    const repeat = document.querySelector('#repeat').value;
    const repeatNum = parseInt(repeat); 

    if (repeatNum < 1 || repeatNum > 100) {
        console.log('Sorry, the repeat value should be between 1 and 100');
    } else {
        console.log('Repeat value is valid');
    }
}
