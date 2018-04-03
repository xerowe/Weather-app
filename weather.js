class Weather {
  constructor(city, state) {
    this.apiKey = '59faa6060e65e45e'
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API 
  async getWeather() {
    const response = await fetch (`https://api.wunderground.com/api/${this.apiKey}/forecast10day/q/${this.state}/${this.city}.json`);
    const responseDate = await response.json();

    return responseDate.forecast;
  } 

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
