//Handle scroll event on window
//Check that skills section is visible or not
//ensure that initial width of colored skill divs is Zero -> initialised/Rest to 0 width value
//Start animation on every skill -> increase skill width from  0 to skill level at regular intervals
//Store skill level -> HTML with the help of data attribute

// ***************************************************************************************************************
// source code 1
var progressBars = document.querySelectorAll('.full-progress > div');
var skillsContainer = document.getElementById('display-progress');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        // bar.style.width = 0 + '%';
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){
    for (let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let fillBarInterval = setInterval(function(){

            if(currentWidth > targetWidth){
                clearInterval(fillBarInterval);
                return;
            }
            // else
            ++currentWidth;
            bar.style.width = currentWidth + '%';

        }, 5);
    }
}

function checkScroll(){
    //you have to check whether skill container is visible
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){ //window.innerHeight gives height of viewport
        animationDone = true;
        //now fire animation -
        fillBars();

        console.log('Skill Section Visible');
    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        // initialiseBars(); ----- serves the purpose even without writing this line 
    }
}
