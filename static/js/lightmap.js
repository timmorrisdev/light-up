function initMap() {

    // map option

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 54.6538,
            lng: -8.1096
        }
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