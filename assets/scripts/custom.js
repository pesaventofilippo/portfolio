function switchTheme() {
    let theme = localStorage.getItem('currentTheme') || 'default';
    theme = theme === 'default' ? 'dark' : 'default';
    
    let css = document.getElementById("theme");
    css.href = `/assets/css/${theme}.css`;
    localStorage.currentTheme = theme;
}


function getAge() {
    let today = new Date();
    let birthDate = new Date("June 23, 2003");
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
        age--;
    return age;
}


window.onload = function() {
    // Theme Modifier
    let css = document.getElementById("theme");
    let theme = localStorage.getItem('currentTheme') || 'default';
    css.href = `/assets/css/${theme}.css`;

    // Calculate age
    let age = document.getElementById("age");
    if (age) age.innerHTML = getAge();
}
