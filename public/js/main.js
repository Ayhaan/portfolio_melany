// navbar sticky
let header = document.getElementById("myHeader");
let portfolio = document.querySelector('#portfolio');
let sticky = header.offsetTop;

console.log(header);
console.log(portfolio);

function myFunction() {
    if (window.pageYOffset > sticky) {
        portfolio.classList.add("sticky");

    } else {
        portfolio.classList.remove("sticky");
    }
}
window.onscroll = function () {
    myFunction()
};

// navbar active
let lien = document.querySelectorAll('.nav-link');

lien.forEach(el => {
    el.addEventListener('click', () => {
        lien.forEach(el => {
            el.classList.remove('un')
        })
        el.classList.add('un')
    })
});

// modal photoshop
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden'
}

span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = 'scroll'
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// modal indesign
let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("myBtn2");
let span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
    modal2.style.display = "flex";
    document.body.style.overflow = 'hidden'
}

span2.onclick = function () {
    modal2.style.display = "none";
    document.body.style.overflow = 'scroll'
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// modal photographie
let modal3 = document.getElementById("myModal3");
let btn3 = document.getElementById("myBtn3");
let span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function () {
    modal3.style.display = "flex";
    document.body.style.overflow = 'hidden'
}

span3.onclick = function () {
    modal3.style.display = "none";
    document.body.style.overflow = 'scroll'
}

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

// modal dessins
let modal4 = document.getElementById("myModal4");
let btn4 = document.getElementById("myBtn4");
let span4 = document.getElementsByClassName("close4")[0];

btn4.onclick = function () {
    modal4.style.display = "flex";
    document.body.style.overflow = 'hidden'
}

span4.onclick = function () {
    modal4.style.display = "none";
    document.body.style.overflow = 'scroll'
}

window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}

// modal illustrator
let modal5 = document.getElementById("myModal5");
let btn5 = document.getElementById("myBtn5");
let span5 = document.getElementsByClassName("close5")[0];

btn5.onclick = function () {
    modal5.style.display = "flex";
    document.body.style.overflow = 'hidden'
}

span5.onclick = function () {
    modal5.style.display = "none";
    document.body.style.overflow = 'scroll'
}

window.onclick = function (event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}
