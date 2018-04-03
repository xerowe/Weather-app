// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI 
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
  weather.getWeather()
  .then(result => {
    ui.paint(result);
  })
  .catch(err => console.log(err));
}


// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  if (city == null || city == '' || state == null || state == '') {
    alert('Please fill out the required field')
  } else {
    // Change location
    weather.changeLocation(city, state);

    // Set location in LS
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();
    document.getElementById('w-loc').innerHTML = city;
  }
 
});

// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('w-loc');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Close The modal after submitting new location
document.getElementById('w-change-btn').addEventListener('click', closeModal);



// Function to open modal
function openModal(){
  modal.style.display = 'block';
  modalBtn.classList.toggle('active');
  return false;
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
  modalBtn.classList.toggle('active');
  return false;
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
    modalBtn.classList.toggle('active');
    return false;
  }
}

// END OF MODAL ELEMENt 
