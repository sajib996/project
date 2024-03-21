const length = 1;
for (let i = 0; i < length; i++) {
  const array = ["01602830626"];
  const random = Math.floor(Math.random() * array.length);
  const phone = array[random];
  const phoneNumber = `+88${phone}`;
  const url = "https://api.busbd.com.bd/api/auth";

  const data = {
    phone: phoneNumber,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}
