"use strict";

document.getElementById("autocomplete").addEventListener("click", initialize)

function initialize() {
    var input = document.getElementById('autocomplete');
    var options = {
    componentRestrictions: { country: ["gb", "ie"] },
    types: ['geocode'] //this should work !
    };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
}
google.maps.event.addDomListener(window, 'load', initialize);
