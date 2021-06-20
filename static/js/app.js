window.onload = function () {
    getUserStyleSetting();
  };
//COLOR TOGGLE
//Inspired by slack call in #interactive-front-end channel led by Eamon_lead on 23-09-20
//Grab radio Buttons
function getUserStyleSetting() {
    myRadioSett = document.querySelectorAll('input[name="set-style"]');
    console.log(myRadioSett)
  
    let i,
      max = myRadioSett.length;
  
    for (i = 0; i < max; i++) {
      myRadioSett[i].onclick = function () {
          console.log('ducky');
        let style = this.value[0].toUpperCase() + this.value.slice(1);
        console.log(style)
        sessionStorage.setItem("chosenStyle", style);
        applyStyle();
      };
    }
  }
  //apply appropriate class, remove the others and check appropriate checkbox
  function applyStyle(style = sessionStorage.getItem("chosenStyle")) {
    if (style === "Blue") {
      let target = document.querySelectorAll(".color");
      for (let i = 0; i < target.length; i++) {
        target[i].classList.remove("red", "pink", "yellow", "green", "orange");
        target[i].classList.add("blue");
        document.querySelector("#styleChoice3").checked = true;
      }
      let logo = document.querySelector("#logo");
      logo.classList.remove("orangeLogo", "pinkLogo", "redLogo", "yellowLogo", "greenLogo")
      logo.classList.add("blueLogo")
      let logoPath = document.querySelectorAll('.logoPath')
      for (let x = 0; x < logoPath.length; x++) {
        logoPath[x].classList.remove("orangePath", "pinkPath", "redPath", "yellowPath", "greenPath");
        logoPath[x].classList.add("bluePath");
      }
    } else if (style === "Pink") {
      let target = document.querySelectorAll(".color");
      for (let i = 0; i < target.length; i++) {
        target[i].classList.remove("red", "blue", "yellow", "green", "orange");
        target[i].classList.add("pink");
        document.querySelector("#styleChoice5").checked = true;
      }
      let logo = document.querySelector("#logo");
      logo.classList.remove("orangeLogo", "blueLogo", "redLogo", "yellowLogo", "greenLogo")
      logo.classList.add("pinkLogo")
      let logoPath = document.querySelectorAll('.logoPath')
      for (let x = 0; x < logoPath.length; x++) {
        logoPath[x].classList.remove("orangePath", "bluePath", "redPath", "yellowPath", "greenPath");
        logoPath[x].classList.add("pinkPath");
      }
    } else if (style === "Red") {
      let target = document.querySelectorAll(".color");
      for (let i = 0; i < target.length; i++) {
        target[i].classList.remove("blue", "pink", "yellow", "green", "orange");
        target[i].classList.add("red");
        document.querySelector("#styleChoice1").checked = true;
      }
      let logo = document.querySelector("#logo");
      logo.classList.remove("orangeLogo", "blueLogo", "yellowLogo", "pinkLogo", "greenLogo")
      logo.classList.add("redLogo")
      let logoPath = document.querySelectorAll('.logoPath')
      for (let x = 0; x < logoPath.length; x++) {
        logoPath[x].classList.remove("orangePath", "bluePath", "yellowPath", "pinkPath", "greenPath");
        logoPath[x].classList.add("redPath");
      }
    } else if (style === "Yellow") {
      let target = document.querySelectorAll(".color");
      for (let i = 0; i < target.length; i++) {
        target[i].classList.remove("blue", "pink", "red", "green", "orange");
        target[i].classList.add("yellow");
        document.querySelector("#styleChoice2").checked = true;
      }
      let logo = document.querySelector("#logo");
      logo.classList.remove("orangeLogo", "blueLogo", "redLogo", "pinkLogo", "greenLogo")
      logo.classList.add("yellowLogo")
      let logoPath = document.querySelectorAll('.logoPath')
      for (let x = 0; x < logoPath.length; x++) {
        logoPath[x].classList.remove("orangePath", "bluePath", "redPath", "pinkPath", "greenPath");
        logoPath[x].classList.add("yellowPath");
      }
    } else if (style === "Green") {
      let target = document.querySelectorAll(".color");
      for (let i = 0; i < target.length; i++) {
        target[i].classList.remove("blue", "pink", "red", "yellow", "orange");
        target[i].classList.add("green");
        document.querySelector("#styleChoice4").checked = true;
      }
      let logo = document.querySelector("#logo");
      logo.classList.remove("orangeLogo", "pinkLogo", "redLogo", "yellowLogo", "blueLogo")
      logo.classList.add("greenLogo")
      let logoPath = document.querySelectorAll('.logoPath')
      for (let x = 0; x < logoPath.length; x++) {
        logoPath[x].classList.remove("orangePath", "pinkPath", "redPath", "yellowPath", "bluePath");
        logoPath[x].classList.add("greenPath");
      }
    } else if (style === "Orange") {
      let target = document.querySelectorAll(".color");
      for (let i = 0; i < target.length; i++) {
        target[i].classList.remove("blue", "pink", "red", "yellow", "green");
        target[i].classList.add("orange");
        document.querySelector("#styleChoice6").checked = true;
      }
      let logo = document.querySelector("#logo");
      logo.classList.remove("blueLogo", "pinkLogo", "redLogo", "yellowLogo", "greenLogo")
      logo.classList.add("orangeLogo")
      let logoPath = document.querySelectorAll('.logoPath')
      for (let x = 0; x < logoPath.length; x++) {
        logoPath[x].classList.remove("bluePath", "pinkPath", "redPath", "yellowPath", "greenPath");
        logoPath[x].classList.add("orangePath");
      }
    }
  }