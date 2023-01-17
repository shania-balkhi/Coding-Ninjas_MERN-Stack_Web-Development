//approach 1 

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);

for(var i = 0; i < navMenuAnchorTags.length; ++i){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();

        //which section do you want to travel to --- fetch sectionName you want to travel to
        //i.e, current anchor tag being clicked will have a text content and we want to fetch that textContent.
        //we will get the current anchor tag using "this" keyword
        //trim() is used for removing extra spaces
        //toLowerCase() is used bcz IDs are generally in small letters
        var targetSectionID = this.textContent.trim().toLowerCase();
        //we have fetched the ID now, from ID we will fetch the relevant section
        // console.log(targetSectionID);

        //now fetching the section using ID
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);


        //now figure out the coordinates of targetSection
        //var targetSectionCoordinates = targetSection.getBoundingClientRect();  ----- this line should be inside the setInterval function 

        //fetch the interval
        var scrollInterval = setInterval(function(){

            var targetSectionCoordinates = targetSection.getBoundingClientRect();

            if(targetSectionCoordinates.top <= 0){
                clearInterval(scrollInterval);
                return;
            }

            // else
            window.scrollBy(0, 50);

        }, 20);
    });
}


// ********************************************************************************
// approach 2

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var scrollInterval;
// console.log(navMenuAnchorTags);

for(var i = 0; i < navMenuAnchorTags.length; ++i){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();

        //which section do you want to travel to --- fetch sectionName you want to travel to
        //i.e, current anchor tag being clicked will have a text content and we want to fetch that textContent.
        //we will get the current anchor tag using "this" keyword
        //trim() is used for removing extra spaces
        //toLowerCase() is used bcz IDs are generally in small letters
        var targetSectionID = this.textContent.trim().toLowerCase();
        //we have fetched the ID now, from ID we will fetch the relevant section
        // console.log(targetSectionID);

        //now fetching the section using ID
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);


        //now figure out the coordinates of targetSection
        //var targetSectionCoordinates = targetSection.getBoundingClientRect();  ----- this line should be inside the setInterval function 

        //fetch the interval
        scrollInterval = setInterval(scrollVertically, 20, targetSection);
    });
}


function scrollVertically(targetSection){

    var targetSectionCoordinates = targetSection.getBoundingClientRect();

    if(targetSectionCoordinates.top <= 0){
        clearInterval(scrollInterval);
        return;
    }

    // else
    window.scrollBy(0, 50);

}



// **************************************************************************
// approach 3 ------ works!

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var scrollInterval;
// console.log(navMenuAnchorTags);

for(var i = 0; i < navMenuAnchorTags.length; ++i){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();

        //which section do you want to travel to --- fetch sectionName you want to travel to
        //i.e, current anchor tag being clicked will have a text content and we want to fetch that textContent.
        //we will get the current anchor tag using "this" keyword
        //trim() is used for removing extra spaces
        //toLowerCase() is used bcz IDs are generally in small letters
        var targetSectionID = this.textContent.trim().toLowerCase();
        //we have fetched the ID now, from ID we will fetch the relevant section
        // console.log(targetSectionID);

        //now fetching the section using ID
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);


        //now figure out the coordinates of targetSection
        //var targetSectionCoordinates = targetSection.getBoundingClientRect();  ----- this line should be inside the setInterval function 

        //fetch the interval
        scrollInterval = setInterval(function(){
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection){

    var targetSectionCoordinates = targetSection.getBoundingClientRect();

    if(targetSectionCoordinates.top <= 0){
        clearInterval(scrollInterval);
        return;
    }

    // else
    window.scrollBy(0, 50);

}
