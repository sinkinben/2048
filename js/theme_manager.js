const Themes = {
    "mit": {
        "path": "img/get-mit/",
        "background": "img/get-mit/petey.png",
        "intro": "Combine other colleges to reach the almighty MIT!",
    },
    "sjtu": {
        "path": "img/get-sjtu",
        "background": "img/get-sjtu/mofa.jpg",
        "intro": "Combine other colleges to reach the Hogwarts College!",
    }
}

window.onload = function () {
    changeTheme('mit');
}

function selectEvent() {
    var selected = document.getElementById("themeSelector").value;
    changeTheme(selected);
}
function changeTheme(selected) {
    // hide original background
    document.body.style.background = '';

    var theme = Themes[selected];
    
    // change the introduction
    var intro = document.getElementsByClassName('game-intro')[0];
    intro.innerHTML = theme.intro;

    // change the Easter eggs (click intro to change background)
    var introSpan = document.getElementById('intro-span');
    introSpan.onclick = function () { document.body.style.background = `url(${theme.background})` };

    // TODO: change the merging blocks
    

}

