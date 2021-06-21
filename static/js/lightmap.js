function initMap() {

    // map option

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 53.211231446665835,
            lng: -8.163598054945362
        },
        //styles for nightmode sourced from https://developers.google.com/maps/documentation/javascript/examples/style-array
        styles: [{
                elementType: "geometry",
                stylers: [{
                    color: "#242f3e"
                }]
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#242f3e"
                }],
            },
            {
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#746855"
                }],
            },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#d59563"
                }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#d59563"
                }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                    color: "#263c3f"
                }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#6b9a76"
                }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    color: "#38414e"
                }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#212a37"
                }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#9ca5b3"
                }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    color: "#746855"
                }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#1f2835"
                }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#f3d19c"
                }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#2f3948"
                }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#d59563"
                }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#17263c"
                }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#515c6d"
                }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#17263c"
                }],
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
            name: "Aisling D",
            age: "32",
            location: "Co. Leitrim, Ireland",
            latLng: {
                lat: 54.037546162176724,
                lng: -7.905421185822573
            }
        },
        person2: {
            name: "TonyH",
            age: "28",
            location: "Tooreen, Co. Mayo, Ireland",
            latLng: {
                lat: 53.830193377683116,
                lng: -8.764660927901131
            }
        },
        person3: {
            name: "LowriP",
            age: "28",
            location: "Co. Leitrim, Ireland",
            latLng: {
                lat: 54.289204347384064,
                lng: -8.27783931866711
            }
        },

        person4: {
            name: "RickyH",
            location: "Sligo",
            latLng: {
                lat: 54.27639276879619,
                lng: -8.476524425305202
            }
        },

        person5: {
            name: "HabibB",
            location: "Leitir Ceanainn, Co. Donegal, Ireland",
            latLng: {
                lat: 54.956011798643665,
                lng: -7.734160636185547
            }
        },

        person6: {
            name: "Tori Smith",
            location: "Coolmore, Co. Donegal, Ireland",
            latLng: {
                lat: 54.54474373153263,
                lng: -8.213895096483197
            }
        },

        person7: {
            name: "Mathilde Deasun",
            location: "Terhillion, Co. Donegal, Ireland",
            latLng: {
                lat: 54.63092342457369,
                lng: -8.212174596441933
            }
        },

        person8: {
            name: "Jamaal Caito",
            location: "Westport, Co. Mayo, Ireland",
            latLng: {
                lat: 53.80208666939831,
                lng: -9.514825962010342
            }
        },

        person9: {
            name: "Rebekka Roberts",
            location: "Tralee, Co. Kerry, Ireland",
            latLng: {
                lat: 52.271593487410236,
                lng: -9.700499985033886
            }
        },

        person10: {
            name: "John Sulzbach",
            location: "Skibbereen, Co. Cork, Ireland",
            latLng: {
                lat: 51.55632381045682,
                lng: -9.262087405833633
            }
        },

        person11: {
            name: "Anto_Bilic",
            location: "Monmouth, Monmouthshire, South East Wales",
            latLng: {
                lat: 51.81265847852813,
                lng: -2.716038360087779
            }
        },

        person12: {
            name: "TanjaBerger",
            location: "Ribble Valley, Lancashire",
            latLng: {
                lat: 53.892847440782276,
                lng: -2.448580142359242
            }
        },

    };


    //add people markers

    function addMarker(location) {

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: "static/images/pride-pin-simple.png",
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

        addMarker(people[i].latLng);

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