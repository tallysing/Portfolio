"use strict";

function toggleDetails(project) {
    
    var details=document.getElementsByTagName("details")[0];

    if (details.open) {
        details.open=false;
    } else {
        details.open=true;
    }

}

var project1=document.getElementsByTagName("figure")[0];

project1.addEventListener("click", function handleProjects(evt) {
    evt.preventDefault();

    toggleDetails(project1)
});