function switchTheme() {
    var currentTheme = localStorage.currentTheme;
    if(currentTheme == "default") {
        localStorage.currentTheme = "dark";
    }
    else if(currentTheme == "dark") {
        localStorage.currentTheme = "default";
    }
    location.reload();
};


window.onload = function() {
    var currentTheme = localStorage.currentTheme;
    if(!currentTheme) {
        localStorage.currentTheme = "default";
        currentTheme = "default";
    }
    var link_tag = document.getElementsByTagName("link");
        for (var i=0; i<link_tag.length; i++) {
            if ((link_tag[i].rel.indexOf("stylesheet") != -1) && link_tag[i].title) {
                link_tag[i].disabled = true;
                if (link_tag[i].title == currentTheme) {
                    link_tag[i].disabled = false;
                }
            }
        }
};