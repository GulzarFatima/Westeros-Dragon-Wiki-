window.onload = function () {

  // dragon and house form //

  // get form elements
  var houseForm = document.forms.houseForm;
  var dragonForm = document.forms.dragonForm;

  console.log(houseForm);
  console.log(dragonForm);

  // function to handle house selection form
  function loadHouse() {
    var house = houseForm.houseSelect;

    // reset 
    house.style.background = "";

    if (house.value === "") {
      house.style.background = "red";
      return false;
    }

    // redirect to selected house page
    window.location.href = "house-" + house.value + ".html";
    return false;
    }


  // function to handle dragon selection form
  function loadDragon() {
    var dragon = dragonForm.dragonSelect;
    dragon.style.background = "";

    if (dragon.value === "") {
      dragon.style.background = "red";
      return false;
    }

    // redirect to selected dragon page
    window.location.href = "dragon-" + dragon.value + ".html";
    return false;
  }

  // link form to their respective functons
  if (houseForm) {
    houseForm.onsubmit = loadHouse;
  }

  if (dragonForm) {
    dragonForm.onsubmit = loadDragon;
  }

  };
  
// Interest Form  // 

  // get form elements
  var interestForm = document.forms.interestForm;

  // check if the form exists
  if (interestForm) {
    
    interestForm.onsubmit = processInterest;
    console.log(document.forms.interestForm);

    function processInterest() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var thankYouBox = document.getElementById('interest_thanks');

    // Reset background
    nameInput.style.background = '';
    emailInput.style.background = '';

    // Validate name
    if (nameInput.value === "") {
      nameInput.style.background = 'red';
      nameInput.focus();
      return false;
    }

    // Validate email
    if (emailInput.value === "") {
      emailInput.style.background = 'red';
      emailInput.focus();
      return false;
    }

    // Hide form
    interestForm.style.display = 'none';

    // Show thank you box with user's name
    var userName = nameInput.value;
  
    // Capitalize first letter
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);

    document.getElementById('thankUserName').innerHTML = userName;
    thankYouBox.style.display = 'block';

    return false; 
    }
};

// music play/pause //

// get elements
var music = document.getElementById("background-music");
var musicBtn = document.getElementById("play-music");

// set default state
var isPlaying = false;

// event listener - click on/off
musicBtn.addEventListener("click", musicSwitch);

// play/pause fucntion
function musicSwitch() {

  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🔊 Play Music";
    isPlaying = false;

  } else {

    music.play();
    musicBtn.textContent = "⏸️ Pause Music";
    isPlaying = true;
  }
};

