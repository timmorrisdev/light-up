function initMap() {

    // map option

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 54.6538,
            lng: -8.1096
        }
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

    //add markers

    function addMarker(location) {

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: "assets/images/pride-pin-simple.png"
        });

        //change icon to be lit
        marker.addListener("mouseover", () => {
            marker.setIcon("assets/images/pride-pin-lit.png");
        });

        marker.addListener("mouseout", () => {
            marker.setIcon("assets/images/pride-pin-simple.png");
        });

    };

    for (let i in people) {
        addMarker(people[i].latLng)

    };

    // addMarker(people.person1.latLng);
    // addMarker(people.person2.latLng);

    /*
        //info window

        const infoWindow = new google.maps.InfoWindow({
            content: `<h2>Donegal</h2>`
        });

        marker.addListener("mouseover", () => {
            infoWindow.open(map, marker);
        });

        marker.addListener("mouseout", () => {
            infoWindow.close(map, marker);
        });
    */






}