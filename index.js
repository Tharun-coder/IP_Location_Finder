let url = "https://ipapi.co/";
let ip = document.querySelector("#IP");
let info = document.querySelector(".information");

async function getData() {
  try {
    if (ip.value === "") {
      alert("Please enter your IP");
    } else {
      var res = await fetch(url + `${ip.value}/json`, {
        method: "GET",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
      });
      var data = await res.json();

      info.innerHTML = `<div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
    <table>
    <tr>
    <td class="param">Country</td>
    <td>${data.country_name}</td>
    </tr>
    <tr>
    <td  class="param">Capital</td>
    <td>${data.country_capital}</td>
    </tr>
    <tr>
    <td  class="param">City</td>
    <td>${data.city}</td>
    </tr>
    <tr>
    <td  class="param">Region</td>
    <td>${data.region}</td>
    </tr>
    <tr>
    <td  class="param">Currency</td>
    <td>${data.currency}</td>
    </tr>
    </table>
    </div>
    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 tab2">
    <table>
    <tr>
    <td  class="param">Latitude</td>
    <td>${data.latitude}</td>
    </tr>
    <tr>
    <td  class="param">Longitude</td>
    <td>${data.longitude}</td>
    </tr>
    <tr>
    <td  class="param">Languages</td>
    <td>${data.languages}</td>
    </tr>
    <tr>
    <td  class="param">Area</td>
    <td>${data.country_area}</td>
    </tr>
    <tr>
    <td  class="param">Population</td>
    <td>${data.country_population}</td>
    </tr>
    </table>
    </div>`;
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }
}
