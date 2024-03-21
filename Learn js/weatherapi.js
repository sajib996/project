// const apiKey = 'dfb4874116864b19a2f31656240202';
// const location = 'Bangladesh';
// const apiUrl = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${location}`;

// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(JSON.stringify(data));
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

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
    console.log(data)
}


