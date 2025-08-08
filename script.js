//header scroll
const headerContainer = document.getElementById("header-container");

let lastScrollY = window.scrollY;

window.addEventListener("scroll",() => {

    if(Math.abs(window.scrollY - lastScrollY) < 60){
        return;
    }
    else if(window.scrollY > lastScrollY){
        headerContainer.style.top = "-100px";
    }
    else {
        headerContainer.style.top = "0";
    }

    lastScrollY = window.scrollY;
});


//home icon function
const homeIcon = document.getElementById("icon");
const aboutMeBtn = document.getElementById("aboutMeBtn");
const aboutMe = document.getElementById("aboutMe");
const projectBtn = document.getElementById("projectBtn");
const projectNav = document.getElementById("Projects");
const contactBtn = document.getElementById("contactBtn");
const contactContainer = document.getElementById("contact-container");

homeIcon.addEventListener("click", () =>{
    window.scrollTo({top : 0, behavior: "smooth"});
});

aboutMeBtn.addEventListener("click", () =>{
    aboutMe.scrollIntoView({behavior: "smooth"});
});

projectBtn.addEventListener("click", () =>{
    projectNav.scrollIntoView({behavior: "smooth"});
});

contactBtn.addEventListener("click", () =>{
    contactContainer.scrollIntoView({behavior: "smooth"});
});


//test project box
const projectBox = document.querySelectorAll(".project-box")
const backdropContainer = document.getElementById("backdrop-container");
const closeBtn = document.getElementById("closeBtn");
const projects = {
    DiceRoller: {
        name: "Dice Roller",
        description: "This project allow users to roll any number of six sided dices",
        link: "https://bryangonzalez05.github.io/Dice-Roller/"
    },

    CurserFollower: {
        name: "Curser Follower",
        description: "This project is a little fun experiment I made, I wanted to learn how to make things follow the curser. The eyes of the face follow the curser.",
        link: "https://bryangonzalez05.github.io/Eye-follower/",
    },

    DigitalClock: {
        name: "Digital Clock",
        description: "This project is a Digital Clock. It tell you the time for 12AM/PM and military time / 24clock.",
        link: "https://bryangonzalez05.github.io/Digital-Watch/",
    },

    Calculator:{
        name: "Calculator",
        description: "This project is a calculator that does all the basic arithmetic. Also allow for a clear all button and a sign switch for the number inputed.",
        link: "https://bryangonzalez05.github.io/Calculator-HTML-CSS-JS/"
    },

    MathGame:{
        name: "Java Math Game",
        description: "This project is a math game I create because it allows students to work on their basic arithmetic. There are 4 arithemetic options to pick and 3 different difficulty to select.",
        link: "https://github.com/BryanGonzalez05/Java-Math-Game"
    },

    bankingSystem:{
        name: "Java Banking system",
        description: "This project is a banking system that allows the user to sign into an account or create an account and deposit or withdraw money. I create this project because I wanted to get a basic understanding of how banking systems work.",
        link: "https://github.com/BryanGonzalez05/Banking-system"
    },

    TicTacToe:{
        name: "Java Tic Tac Toe",
        description: "This project is my recreation on the classic game of tic tac toe. This was my very first project I did after learning the basics of Java and Java swing.",
        link: "https://github.com/BryanGonzalez05/Tic-Tac-Toe---Java"
    }
}

projectBox.forEach(box => {
    box.addEventListener("click", ()=>{
    let projectID = box.id;
    let projectName = document.getElementById("projectName");
    let descriptionTag = document.getElementById("descriptionTag");
    let linkTag = document.getElementById("linkTag");
    let key = projects[projectID];

    if(key){
            projectName.textContent = key.name;
            descriptionTag.textContent = key.description;
            linkTag.href = key.link;
            linkTag.textContent = key.link;
    } else{
        projectName.textContent = "Project Name";
            descriptionTag.textContent = "Project description";
            linkTag.href = "#";
            linkTag.textContent = "Project Link";
    }
    
    backdropContainer.classList.add("show");
    headerContainer.classList.add("hidden");
    document.body.classList.add("no-scroll");
    });
});

closeBtn.addEventListener("click", () => {
    backdropContainer.classList.remove("show");
    headerContainer.classList.remove("hidden");
    document.body.classList.remove("no-scroll");
});



