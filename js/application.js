const Themes = {
  "mit": {
    "name": "Get MIT!",
    "path": "img/get-mit/",
    "background": "petey.png",
    "intro": "Combine other colleges to reach the almighty MIT!",
    "mapping": {
      "2": "caltech.png",
      "4": "stanford.png",
      "8": "uc.png",
      "16": "uchicago.png",
      "32": "upenn.png",
      "64": "princeton.png",
      "128": "columbia.png",
      "256": "cornell.png",
      "512": "yale.png",
      "1024": "harvard.png",
      "2048": "mit.jpg",
      "super": "ihtfp.png"
    },
  },
  "sjtu": {
    "name": "Get SJTU!",
    "path": "img/get-sjtu/",
    "background": "mofa.jpg",
    "intro": "Combine other colleges to reach the Hogwarts College!",
    "mapping": {
      "2": "fdu.jpg",
      "4": "hit.jpg",
      "8": "xjtu.jpg",
      "16": "nju.jpg",
      "32": "ustc.jpg",
      "64": "zju.jpg",
      "128": "ruc.jpg",
      "256": "thu.png",
      "512": "pku.png",
      "1024": "sjtu.png",
      "2048": "mofa.jpg",
      "super": ""
    }
  }
}


window.onload = function () {
  startGame(Themes.mit);
}

function selectEvent() {
  var selected = document.getElementById("theme-selector").value;
  startGame(Themes[selected]);
}

function startGame(theme) {
  // Wait till the browser is ready to render the game (avoids glitches)
  window.requestAnimationFrame(function () {
    new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager, theme);
  });
}

