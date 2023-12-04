const flags = document.querySelector(".flags");
const dark = document.querySelector(".dark");
const dark1 = document.querySelector(".dark1");
const flag = document.querySelector(".flags");
const searchInput = document.querySelector(".header input");

const body = document.body;

let data = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((response) => {
    data = response;

    console.log(response);

    response.map(
      (country) =>
        (flags.innerHTML += `<div
         class='flag'>
         <img src="./img/photo_2023-11-21_08-43-15.jpg" alt="">
         <h4>${country.name}</h4>
         <h4>${country.email}</h4>
         <h4>${country.username}</h4>
         </div>`)
    );
  });

dark.addEventListener("click", () => {
  body.style.background = "rgb(0, 0, 68)";
});

dark1.addEventListener("click", () => {
  body.style.background = "rgb(97, 174, 245)";
});

///////////////////////////////////////////////////

searchInput.addEventListener("keyup", function (e) {
  flags.innerHTML = "";
  const value = e.target.value;

  const filteredCountries = data.filter((country) => {
    if (country.name.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }

    if (country.name.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }

    if (country.name.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }
  });

  filteredCountries.map(
    (country) =>
      (flags.innerHTML += `<div
         class='flag'>
         <img src="./image/photo_2023-11-21_08-43-15.jpg" alt="" />
         <h4>${country.name}</h4>
         <h4>${country.email}</h4>
         <h4>${country.username}</h4>
         </div>`)
  );
});
