let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res, next){
    res.sendStatus(200);
});

app.get('/blog.html', function(req, res,next){
    res.sendFile(path.join(__dirname+"/blog.html"));
});

app.post('/contact', function(req, res, next){

});
server.listen(port, function() {
    console.log("App is running on port " + port);
});



function fixNav() {
    if (window.scrollY >= topofNav) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0 + 'px';
    }
}


window.addEventListener('scroll', fixNav);




function displayFAQ(num){
    console.log('hey');
    const toggle = document.getElementsByClassName("toggle-answer")[num];
    const faqColor = document.getElementsByClassName('toggle-question')[num];
    // const toggle = document.querySelectorAll(".toggle-answer");
    if(toggle.classList.contains('displayed')){
        toggle.classList.remove('displayed');
    }
    else{
        toggle.classList.add('displayed');
    }
    if(faqColor.classList.contains('faq-color')){
        faqColor.classList.remove('faq-color');
    }
    else{
         faqColor.classList.add('faq-color');

    }

}


function navDropDown(){
    const navList = document.getElementsByClassName("nav-list")[0];
    if(navList.classList.contains('responsive')){
        navList.classList.remove('responsive');
    }
    else{
        navList.classList.add('responsive');
    }

}

const dropDowns = document.querySelectorAll("li:not(:only-child)");
console.log(dropDowns);
function toggleMobileNav (){
    console.log('hey');
    this.classList.toggle('open');
}

dropDowns.forEach(dropDown => dropDown.addEventListener('click', toggleMobileNav));
