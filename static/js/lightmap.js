function initMap() {

    // map option

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 54.6538,
            lng: -8.1096
        },
        //styles for nightmode sourced from https://developers.google.com/maps/documentation/javascript/examples/style-array
    styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        {
          elementType: "labels.text.stroke",
          stylers: [{ color: "#242f3e" }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    });

    // Create the search box and link it to the UI element.
    const input = document.getElementById("search-box");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }
            const icon = {
                url: "assets/images/pride-pin-simple.png",
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };
            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });


    //people data

    let people = {

        person1: {
            name: "Dave",
            age: "32",
            location: "Donegal",
            latLng: {
                lat: 54.6538,
                lng: -8.1096
            }
        },
        person2: {
            name: "Julie",
            age: "28",
            location: "Trummon East",
            latLng: {
                lat: 54.6080634084785,
                lng: -8.08197415728109
            }
        },
        person3: {
            name: "Tina",
            age: "28",
            location: "Mountcharles",
            latLng: {
                lat: 54.64744128280588,
                lng: -8.194890581090707
            }
        }

    };


    //add people markers

    function addMarker(location) {

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: "static/images/pride-pin-simple.png"
        });

        //change icon to be lit
        marker.addListener("mouseover", () => {
            marker.setIcon("static/images/pride-pin-lit.png");
        });

        marker.addListener("mouseout", () => {
            marker.setIcon("static/images/pride-pin-simple.png");
        });

    };

    for (let i in people) {
        addMarker(people[i].latLng)

    };

    //event data

    let events = {
        event1: {
            name: "End of Pride Month Celebration",
            date: "26 June 2021",
            time: "8pm",
            location: "Eyre Square Galway",
            latLng: {
                lat: 53.274896532392404,
                lng: -9.048743074342168
            },
            description: `Come celebrate the end of Pride Month (and end of Lockdown) in a socially
            disanced community event taking place in Galway's Eyre Square. If you would like to 
            attend, please do pop along! Live Music and food trucks available throughout the entire day
            for you to enjoy. Bring all your family and friends! We would love to see you there!`,
        },

        event2: {
            name: "LGBTQ+ Gamers West of Ireland",
            date: "14 August 2021",
            time: "9am",
            location: "University Concert Hall Limerick",
            latLng: {
                lat: 52.67450019762998,
                lng: -8.574073001345498
            },
            description: `All Day Gaming Event, hosted by University of Limerick for the LGBTQ+ community
            from the West of Ireland. If you would love to meet some fellow gamers, make new connections
            and meet new people, then this is the event for you!`,
        },

        event3: {
            name: "Transgender in Tech West of Ireland",
            date: "18 September 2021",
            time: "9am",
            location: "Sligo Institute of Technology",
            latLng: {
                lat: 54.27846131002264,
                lng: -8.462845486907563
            },
            description: `"Hear from some of Irelands biggest names in Tech and how they have been embracing
            being Transgender within the industry. If you are seeking inspiration and reassurance, then look
            no further. This is going to be an amazing event and we are excited to see you there!"`,
        },

        event4: {
            name: "Halloween Teen Hackathon South West of Ireland",
            date: "30 October 2021",
            time: "9am",
            location: "The Brehon Hotel Killarney",
            latLng: {
                lat: 52.0459797478339,
                lng: -9.503917255878095
            },
            description: `Are you aged 18 to 25? All Day Web Development Coding Event. This is sure to be an amazing 
            day where you can meet other LGBTQ+ coders from the South West of Ireland and impress us with your imagination 
            and coding ability! Regardless of your experience, we would love to see you there.
            Prizes sponsored by Kerry County Council.`,
        },
    }

    //add event markers

    function addMarker(location) {

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: "static/images/pride-pin-simple.png"
        });

        //change icon to be lit
        marker.addListener("mouseover", () => {
            marker.setIcon("static/images/pride-pin-lit.png");
        });

        marker.addListener("mouseout", () => {
            marker.setIcon("static/images/pride-pin-simple.png");
        });


    };

    for (let i in events) {
        addMarker(events[i].latLng)

    };

    //info window


    // marker.addListener("mouseover", () => {
    //     infoWindow.open(map, marker);
    // });

    // marker.addListener("mouseout", () => {
    //     infoWindow.close(map, marker);
    // });
}