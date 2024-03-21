const container = document.querySelector('.container');
const weather = document.querySelector('.weather');

function check() {
  container.style.height = '400px';
  container.style.width = '400px';
  weather.style.display = 'flex';

  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(i => {
    const apiKey = 'dfb4874116864b19a2f31656240202';
    const ip = i.ip;
    const apiUrl = `https://api.weatherapi.com/v1/ip.json?key=${apiKey}&q=${ip}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => res(data))
      .catch(error => {
        console.error('Error:', error);
      });
  })

function res(data) {
  const ip = document.querySelector('.ip');
  const type = document.querySelector('.type');
  const continent_code = document.querySelector('.continent-code');
  const continent_name = document.querySelector('.continent-name');
  const country_code = document.querySelector('.country-code');
  const country_name = document.querySelector('.country-name');
  const is_eu = document.querySelector('.is-eu');
  const city = document.querySelector('.city');
  const tz_id = document.querySelector('.tz-id');
  const localtime = document.querySelector('.localtime');


  ip.textContent = data.ip;
  type.textContent = data.type;
  continent_code.textContent = data.continent_code;
  continent_name.textContent = data.continent_name;
  country_code.textContent = data.country_code;
  country_name.textContent = data.country_name;
  is_eu.textContent = data.is_eu;
  city.textContent = data.city;
  tz_id.textContent = data.tz_id;
  localtime.textContent = data.localtime;
}
}