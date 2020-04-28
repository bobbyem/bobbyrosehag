const nameText = 'Bobby Rösehag:';
const name = document.getElementById("name-text");
let nameTextPrinted = false;
const subheadingText = "Kod och kreativitet";
const subheading = document.getElementById("subheading");
const titleSection = document.getElementById("title-section");

let i = 0;
let x = 0;

//Title name typewriter effect
function typeWriterName () {
    if (i < nameText.length && !nameTextPrinted) {
        name.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriterName, 50);
    };
   if (i === nameText.length) {
        nameTextPrinted = true;
        setTimeout(typeWriterSubheading, 1000);
   }   
};

//Subheading typewriter effect
function typeWriterSubheading () {
    if (x < subheadingText.length) {
        subheading.innerHTML += subheadingText.charAt(x);
        x++;
        setTimeout(typeWriterSubheading, 100);
    };
}

//Start typewriter title effect
window.addEventListener('load', function () {
    setTimeout(typeWriterName, 1500);
  });

//Hide title section
hideTitle = () => {
    console.log(titleSection);
    titleSection.style.display ="none";
}

// Title clickhandler
const titleName = document.getElementById("name-text");
const aboutSection = document.getElementById("about");
const aboutLink = document.getElementById("about-link");
scrollToAbout = () => {
    aboutSection.style.display = "flex";
    aboutSection.scrollIntoView({behavior: "smooth"});
    
};
titleName.addEventListener("click", scrollToAbout);
aboutLink.addEventListener("click", scrollToAbout);

//Subheader clickhandler
const titleSubheader = document.getElementById("subheading");
const projectSection = document.getElementById("projects");
const projectLink = document.getElementById("projects-link");
scrollToProjects = () => {
    projectSection.style.display = "flex";
    projectSection.scrollIntoView({behavior: "smooth"}); 
};
titleSubheader.addEventListener("click", scrollToProjects);
projectLink.addEventListener("click", scrollToProjects);

//Scrollhandler nav
const navBar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    console.log(window.scrollY)
    if (window.scrollY >= 300) {
        navBar.style.top ="0";
    }else {
        navBar.style.top = "-60px";
    }
});


//ToggleTab
toggleTab = (event, tabName) => {
    console.log(event, tabName);
    let textSection = document.getElementsByClassName("project-content");
    const projectHeader = document.getElementById("article-header-projects");
    for(let i = 0; i < textSection.length; i++) {
        textSection[i].style.display ="none";
    }

    let projectLinks = document.getElementsByClassName("toggled");
    for(let i = 0; i < projectLinks.length; i++) {
        projectLinks[i].className = projectLinks[i].className.replace("toggled", "");
    }

    document.getElementById(tabName).style.display = "flex";
    event.currentTarget.className += " toggled";
};

