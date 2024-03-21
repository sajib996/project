function updateTime() {
    const time = new Date();
    document.querySelector('.hour').textContent = time.getHours();
    document.querySelector('.min').textContent = time.getMinutes();
    document.querySelector('.sec').textContent = time.getSeconds();
}
setInterval(updateTime, 100);

function doat() {
    const doat = document.querySelector('.doat');
    doat.classList.toggle('text-warning');
}

setInterval(doat,1000)