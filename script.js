// // API call
// let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
// let lat = "lat=52.229676&";
// let lon = "lon=21.012229&";
// let apiOptions = "units=metric&exclude=minutely,alerts&";
// let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
// let file = queryUrl + lat + lon + apiOptions + apiKey;

// fetch(file)
// .then((response) => response.json())
// .then((data) => {
// // Weather main data
// let main = data.current.weather[0].main;
// let description = data.current.weather[0].description;
// let temp = Math.round(data.current.temp);
// let pressure = data.current.pressure;
// let humidity = data.current.humidity;
// let name = "Warsaw";

// document.getElementById("wrapper-description").innerHTML = description;
// document.getElementById("wrapper-temp").innerHTML = temp + "°C";
// document.getElementById("wrapper-pressure").innerHTML = pressure;
// document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
// document.getElementById("wrapper-name").innerHTML = name;

// // Weather hourly data
// let hourNow = data.hourly[0].temp;
// let hour1 = data.hourly[1].temp;
// let hour2 = data.hourly[2].temp;
// let hour3 = data.hourly[3].temp;
// let hour4 = data.hourly[4].temp;
// let hour5 = data.hourly[5].temp;

// document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
// document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
// document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
// document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
// document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
// document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";

// // Time
// let timeNow = new Date().getHours();
// let time1 = timeNow + 1;
// let time2 = time1 + 1;
// let time3 = time2 + 1;
// let time4 = time3 + 1;
// let time5 = time4 + 1;

// document.getElementById("wrapper-time1").innerHTML = time1;
// document.getElementById("wrapper-time2").innerHTML = time2;
// document.getElementById("wrapper-time3").innerHTML = time3;
// document.getElementById("wrapper-time4").innerHTML = time4;
// document.getElementById("wrapper-time5").innerHTML = time5;

// // Weather daily data
// let tomorrowTemp = Math.round(data.daily[0].temp.day);
// let dATTemp = Math.round(data.daily[1].temp.day);
// let tomorrowMain = data.daily[0].weather[0].main;
// let dATTempMain = data.daily[1].weather[0].main;

// document.getElementById("wrapper-forecast-temp-today").innerHTML =
// temp + "°";
// document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML =
// tomorrowTemp + "°";
// document.getElementById("wrapper-forecast-temp-dAT").innerHTML =
// dATTemp + "°";

// // Icons
// let iconBaseUrl = "http://openweathermap.org/img/wn/";
// let iconFormat = ".webp";

// // Today
// let iconCodeToday = data.current.weather[0].icon;
// let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
// document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;

// // Tomorrow
// let iconCodeTomorrow = data.daily[0].weather[0].icon;
// let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
// document.getElementById(
// "wrapper-icon-tomorrow"
// ).src = iconFullyUrlTomorrow;

// // Day after tomorrow
// let iconCodeDAT = data.daily[1].weather[0].icon;
// let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
// document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;

// // Icons hourly

// // Hour now
// let iconHourNow = data.hourly[0].weather[0].icon;
// let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
// document.getElementById(
// "wrapper-icon-hour-now"
// ).src = iconFullyUrlHourNow;

// // Hour1
// let iconHour1 = data.hourly[1].weather[0].icon;
// let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
// document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

// // Hour2
// let iconHour2 = data.hourly[2].weather[0].icon;
// let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
// document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour1;

// // Hour3
// let iconHour3 = data.hourly[3].weather[0].icon;
// let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
// document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;

// // Hour4
// let iconHour4 = data.hourly[4].weather[0].icon;
// let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
// document.getElementById("wrapper-icon-hour4").src = iconFullyUrlHour4;

// // Hour5
// let iconHour5 = data.hourly[5].weather[0].icon;
// let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
// document.getElementById("wrapper-icon-hour5").src = iconFullyUrlHour5;

// // Backgrounds
// switch (main) {
// case "Snow":
// document.getElementById("wrapper-bg").style.backgroundImage =
// "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
// break;
// case "Clouds":
// document.getElementById("wrapper-bg").style.backgroundImage =
// "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
// break;
// case "Fog":
// document.getElementById("wrapper-bg").style.backgroundImage =
// "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
// break;
// case "Rain":
// document.getElementById("wrapper-bg").style.backgroundImage =
// "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
// break;
// case "Clear":
// document.getElementById("wrapper-bg").style.backgroundImage =
// "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
// break;
// case "Thunderstorm":
// document.getElementById("wrapper-bg").style.backgroundImage =
// "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
// break;
// default:
// document.getElementById("wrapper-bg").style.backgroundImage =
// "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
// break;
// }
// });

/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
const apiKey = "4d8fb5b93d4af21d66a2948710284366";

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
      let content = "";
      //athens,gr
      if (inputVal.includes(",")) {
        //athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        //athens
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      } ...otherwise be more specific by providing the country code as well 😉`;
      form.reset();
      input.focus();
      return;
    }
  }

  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 😩";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});