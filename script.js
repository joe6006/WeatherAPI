
//getting elements by id's
const cityname = document.getElementById('cityname');
const mintemp = document.getElementById('mintemp');
const maxtemp = document.getElementById('maxtemp');
const feel = document.getElementById('Feelslike');



let weather = {
   apikey: '4fe2e1bceecdb11f746e14c211e5a971',
    //sets up api data for weather
    fetchWeather: function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=' + this.apikey)        
        .then(response => response.json())
        .then((data) => this.displayWeather(data))
       
    },

       //sends data to html text
    displayWeather: function (data) {

      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity, temp_max, temp_min, feels_like } = data.main;
     


      //setting HTML elements to the api data
      feel.innerText = feels_like + "°C"
      mintemp.innerText = temp_max + "°C"
      maxtemp.innerText = temp_min+ "°C"
      cityname.innerText = name;
      document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector("#details").innerText = description;
      document.querySelector("#tempature").innerText = temp + "°C";
      document.querySelector("#humidity").innerText = humidity + "%";
    },

    //searchbar is now connected to the data
    search: function () {
      this.fetchWeather(document.querySelector("#searchbar").value);

    },
  };

  //just searches city after searchbar input
  document.querySelector("#searchbtn").addEventListener("click", function () {

    weather.search();

  });

  //when hitting enter it searches
  document.querySelector("#searchbar").addEventListener("keyup", function (event) {

      if (event.key == "Enter") {

        weather.search();

      }
    });
  
    //just a preset when opening the page, also calls function
  weather.fetchWeather("Denver");



