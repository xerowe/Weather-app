class UI {
  constructor() {
    this.wLoc = document.getElementById('w-loc');
    this.wDisc = document.getElementById('w-disc');
    this.wIcon = document.getElementById('w-icon');
    this.wTemp = document.getElementById('w-temp');
    this.wWind = document.getElementById('w-wind');
    this.wSnow = document.getElementById('w-snow');
    this.wHum = document.getElementById('w-hum');
    this.wIcon2 = document.getElementById('w-icon2');
    this.wLow2 = document.getElementById('w-low2');
    this.wHigh2 = document.getElementById('w-high2');
    this.wDay2 = document.getElementById('w-day2');
    this.wIcon3 = document.getElementById('w-icon3');
    this.wLow3 = document.getElementById('w-low3');
    this.wHigh3 = document.getElementById('w-high3');
    this.wDay3 = document.getElementById('w-day3');
    this.wIcon4 = document.getElementById('w-icon4');
    this.wLow4 = document.getElementById('w-low4');
    this.wHigh4 = document.getElementById('w-high4');
    this.wDay4 = document.getElementById('w-day4');
    this.wIcon5 = document.getElementById('w-icon5');
    this.wLow5 = document.getElementById('w-low5');
    this.wHigh5 = document.getElementById('w-high5');
    this.wDay5 = document.getElementById('w-day5');
    
   
  }

  paint(weather) {
    this.wLoc.textContent = localStorage.getItem('city');
    this.wDisc.textContent = weather.txt_forecast.forecastday[0].fcttext_metric;
    this.wIcon.alt = weather.simpleforecast.forecastday[0].icon;
    this.wTemp.textContent = weather.simpleforecast.forecastday[0].high.celsius;
    this.wWind.textContent = weather.simpleforecast.forecastday[0].avewind.kph;
    this.wSnow.textContent = weather.simpleforecast.forecastday[0].snow_allday.cm;
    this.wHum.textContent = weather.simpleforecast.forecastday[0].avehumidity;
    this.wIcon2.alt = weather.simpleforecast.forecastday[1].icon;
    this.wLow2.textContent = weather.simpleforecast.forecastday[1].low.celsius;;
    this.wHigh2.textContent = weather.simpleforecast.forecastday[1].high.celsius;
    this.wDay2.textContent = weather.simpleforecast.forecastday[1].date.weekday_short;
    this.wIcon3.alt = weather.simpleforecast.forecastday[2].icon;
    this.wLow3.textContent = weather.simpleforecast.forecastday[2].low.celsius;;
    this.wHigh3.textContent = weather.simpleforecast.forecastday[2].high.celsius;
    this.wDay3.textContent = weather.simpleforecast.forecastday[2].date.weekday_short;
    this.wIcon4.alt = weather.simpleforecast.forecastday[3].icon;
    this.wLow4.textContent = weather.simpleforecast.forecastday[3].low.celsius;;
    this.wHigh4.textContent = weather.simpleforecast.forecastday[3].high.celsius;
    this.wDay4.textContent = weather.simpleforecast.forecastday[3].date.weekday_short;
    this.wIcon5.alt = weather.simpleforecast.forecastday[4].icon;
    this.wLow5.textContent = weather.simpleforecast.forecastday[4].low.celsius;;
    this.wHigh5.textContent = weather.simpleforecast.forecastday[4].high.celsius;
    this.wDay5.textContent = weather.simpleforecast.forecastday[4].date.weekday_short;



    // Set weather img 
    let wIcon = document.querySelectorAll('.icon'), i;
    for (i = 0; i < wIcon.length; ++i) {
      if (wIcon[i].alt === "clear") {
        wIcon[i].src = "images/day.svg"
      } else if ( wIcon[i].alt === "rain" ) {
        wIcon[i].src = "images/rain.svg"
      } else if ( wIcon[i].alt === "partlycloudy" ) {
        wIcon[i].src = "images/cloudy.svg"
      }  else if ( wIcon[i].alt === "chancerain" ) {
        wIcon[i].src = "images/chancerain.svg"
      } else if ( wIcon[i].alt === "cloudy" ) {
        wIcon[i].src = "images/fcloudy.svg"
      } else if ( wIcon[i].alt === "snow" ) {
        wIcon[i].src = "images/snowy.svg"
      }  else if ( wIcon[i].alt === "chancetstorms" ) {
        wIcon[i].src = "images/storm.svg"
      }
    } 
  }
}

