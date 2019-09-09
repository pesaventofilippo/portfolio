function isLsSupported() {
    try {
        localStorage.setItem("check", "check");
        localStorage.removeItem("check");
        return true;
    } catch(e) {
        return false;
    }
}


function switchTheme() {
    if(isLsSupported()) {
        var currentTheme = localStorage.currentTheme;
        if(currentTheme === "default") {
            localStorage.currentTheme = "dark";
        }
        else if(currentTheme === "dark") {
            localStorage.currentTheme = "default";
        }
        location.reload();
    }
}


window.onload = function() {
    // Theme Modifier
    if(isLsSupported()) {
        var currentTheme = localStorage.currentTheme;
        if(!currentTheme) {
            localStorage.currentTheme = "default";
            currentTheme = "default";
        }
        if(currentTheme === "default") {
            document.getElementById("default-theme").disabled = false;
            document.getElementById("dark-theme").disabled = true;
        }
        else if(currentTheme === "dark") {
            document.getElementById("dark-theme").disabled = false;
            document.getElementById("default-theme").disabled = true;
        }
    }
    else {
        document.getElementById("default-theme").disabled = false;
        document.getElementById("dark-theme").disabled = true;
        document.getElementById("footer-switchtheme").innerHTML = "";
    }

    // HitCounter Updater
    var hitcounter = document.getElementById("hitcounter");
    if(hitcounter) {
        var req = new XMLHttpRequest();
        req.open("GET", "https://hitcounter.pythonanywhere.com/count?url=pesaventofilippo.com", false);
        req.send(null);
        hitcounter.innerText = req.responseText;
    }
}
