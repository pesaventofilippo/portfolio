let data;


function switchTheme() {
    let currentTheme = localStorage.currentTheme;
    let theme = document.getElementById("theme");

    localStorage.currentTheme = currentTheme == "default" ? "dark" : "default";
    theme.href = `/assets/css/${localStorage.currentTheme}.css`;
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


function parseSkillList(json) {
    let skills = "";
    for (let i in json) {
        skills += `<li class="item">
                        <span class="title"><strong>${json[i].title}:</strong></span>
                        <span class="level">${json[i].level} <br class="visible-sm visible-xs">`;
        let score = json[i].score;
        while (score >= 1) {
            score--;
            skills += "<i class='fas fa-star'></i> ";
        }
        if (score > 0)
            skills += "<i class='fas fa-star-half'></i> ";
        skills += "</span></li>";
    }
    return skills;
}


function parseEducationList(json) {
    let education = "";
    for (let i in json) {
        education += `<div class="item">
                        <h3 class="title"><i class="${json[i].icon}" aria-hidden="true"></i> ${json[i].title}</h3>
                        <h4 class="university">${json[i].description} <span class="year">(${json[i].year})</span></h4>
                      </div>`;
    }
    return education;
}


function loadInfo() {
    document.getElementById("bio").innerText = data.texts.bio;
    let socials = "";
    for (let i in data.social) {
        let s = data.social[i];
        socials += `<li class="list-inline-item"><a href="${s.link}" target="_blank"><i class="${s.icon}"></i></a></li>`;
    }
    document.getElementById("social-list").innerHTML = socials;

    document.getElementById("contact-button").href = data.contactButton.link;
    document.getElementById("contact-button").innerHTML = `<i class="${data.contactButton.icon}"></i> ${data.contactButton.text}`;
    document.getElementById("aboutme").innerHTML = data.texts.aboutme;
    document.getElementById("footer-credits").innerHTML = `<small>${data.texts.footer}</small>`;
}


function loadProjects(page=0) {
    let projects = "";
    for (let i in data.projectPages[page].projects) {
        let p = data.projectPages[page].projects[i];
        projects += `
            <div class="item row">
                <a class="col-md-4 col-12" href="${p.links[0].link}">
                    <img class="img-fluid project-image" src="${p.photo}" width="600" height="450" alt="${p.name}">
                </a>
                <div class="desc col-md-8 col-12">
                    <h3 class="title"><a href="${p.links[0].link}">${p.name}</a></h3>
                    <p class="mb-2">${p.description}</p>
                    <p>`;
        for (let j in p.links)
            projects += `<a class="more-link" href="${p.links[j].link}"><i class="fas fa-external-link-alt"></i>${p.links[j].text}</a><br>`;
        projects += `</p></div></div>`;
    }
    projects += data.projectPages[page].bottomText;
    document.getElementById("projects-title").innerHTML = data.projectPages[page].title;
    document.getElementById("projects-div").innerHTML = projects;
    scroll(0,0);
}


function loadAsideInfo() {
    let contact = "";
    for (let i in data.contactInfo) {
        let c = data.contactInfo[i];
        contact += `<li><i class="${c.icon}"></i><span class="sr-only">${c.name}:</span>${c.text}</li>`;
    }
    document.getElementById("contact-list").innerHTML = contact;

    let skills = parseSkillList(data.skills);
    skills += `<li>${data.texts.skillsBottom}</li>`;
    document.getElementById("skills-list").innerHTML = skills;

    let languages = parseSkillList(data.languages);
    document.getElementById("languages-list").innerHTML = languages;

    let education = parseEducationList(data.education);
    document.getElementById("education-list").innerHTML = education;

    let achievements = parseEducationList(data.achievements);
    document.getElementById("achievements-list").innerHTML = achievements;

    let work = parseEducationList(data.work);
    document.getElementById("work-list").innerHTML = work;
}



window.onload = function() {
    // Theme Modifier
    let theme = document.getElementById("theme");
    if(!localStorage.currentTheme)
        localStorage.currentTheme = "default";
    theme.href = `/assets/css/${localStorage.currentTheme}.css`;


    // HitCounter Updater
    let req = new XMLHttpRequest();
    req.open("GET", "https://hitcounter.pythonanywhere.com/count?url=pesaventofilippo.com", true);
    req.onload = function() {
        if (req.status === 200) {
            let hitcounter = document.getElementById("hitcounter");
            if (hitcounter)
                hitcounter.innerText = req.responseText;
        }
    }
    req.send();


    // Load info from file data.json
    req.open("GET", "/assets/data.json", true);
    req.onload = function() {
        if (req.status === 200) {
            data = JSON.parse(req.responseText);
            loadInfo();
            loadProjects();
            loadAsideInfo();
        }
    }
    req.send();


    // Calculate age
    let age = document.getElementById("age");
    if (age) age.innerHTML = getAge();
}
