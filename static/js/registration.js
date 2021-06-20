"use strict";

const countryRestrict = {
  country: "uk",
};

  uk: {
    center: {
      lat: 54.8,
      lng: -4.6,
    },
    zoom: 5,
  },

let autocomplete;

  //Create the autocomplete object and associate it with the 'cities' search box.
  //Restrict the search to the country selected and place type to 'cities'.
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    {
      types: ["(cities)"],
      componentRestrictions: countryRestrict,
    }
  );