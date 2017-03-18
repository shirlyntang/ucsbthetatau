function displayFAQ(num){
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
function toggleMobileNav (){
    this.classList.toggle('open');
}

dropDowns.forEach(dropDown => dropDown.addEventListener('click', toggleMobileNav));
