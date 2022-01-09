const Themes = {
  "asoul": {
    "name": "Get A-Soul!",
    "path": "img/get-asoul/",
    "background": "chenrui2.png",
    "intro": "Get the lovely A-Souls when the lemons are ripe.",
    "mapping": {
      "2": "ava.webp",
      "4": "carol.webp",
      "8": "diana.webp",
      "16": "kira.webp",
      "32": "queen.webp",
      "64": "ava2.jpeg",
      "128": "carol2.png",
      "256": "diana2.png",
      "512": "kira2.png",
      "1024": "queen2.jpeg",
      "2048": "chenrui.webp",
      "super": "chenrui2.png"
    }
  },
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
      "256": "thu.jpg",
      "512": "pku.jpg",
      "1024": "sjtu.jpg",
      "2048": "mofa.jpg",
      "super": "mofa.jpg"
    }
  },
  "offer": {
    name: "Get Offer!",
    path: "img/get-offer/",
    background: "",
    intro: "What is the end of the universe?",
    mapping: {
      "2": "shit.png",
      "4": "pdd.png",
      "8": "baidu.png",
      "16": "bytedance.png",
      "32": "alibaba.png",
      "64": "tencent.png",
      "128": "facebook.png",
      "256": "microsoft.png",
      "512": "apple.png",
      "1024": "google.png",
      "2048": "service-people.jpeg",
      "super": "tieling.png",
    }
  },
  "pokemon": {
    name: "Get Pokemon!",
    path: "img/get-pokemon/",
    background: "why.jpeg",
    intro: "Pokemon, go!",
    mapping: {
      "2": "Pichu.webp",
      "4": "Pikachu.webp",
      "8": "Raichu.webp",
      "16": "Charmander.webp",
      "32": "Charmeleon.webp",
      "64": "Charizard-MegaX.webp",
      "128": "Gastly.webp",
      "256": "Haunter.webp",
      "512": "Gengar-Mega.webp",
      "1024": "Mewtwo-MegaY.webp",
      "2048": "Magikarp.webp",
      "super": "Magikarp.webp"
    }
  }
}

var globalId = -1;
var gm = null;
const ThemeSelector = "theme-selector";

window.onload = function () {
  // init them options list
  initThemeOptions();

  // set A Soul as the default theme (1st theme in Themes is default)
  var theme = Themes.asoul;
  gm = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager, theme);
  startGame(theme);
}

function initThemeOptions() {
  var selector = document.getElementById(ThemeSelector);
  for (var key in Themes) {
    let val = Themes[key];
    let option = new Option(val.name, key);
    selector.appendChild(option);
  }
}

function selectEvent() {
  var selected = document.getElementById(ThemeSelector).value;
  startGame(Themes[selected]);
}

function startGame(theme) {
  // cancel the callback function set before
  if (globalId != -1)
    window.cancelAnimationFrame(globalId);
  
  // set the them in Game Manager
  gm.actuator.theme = theme;
  gm.actuator.setTheme();

  // Wait till the browser is ready to render the game (avoids glitches)
  globalId = window.requestAnimationFrame(function () { gm });

  // restart the game 
  document.getElementsByClassName('retry-button')[0].click();

}

