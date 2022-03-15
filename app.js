"use strict";
window.onload = function () {
    console.log("this happens");
    //let places = staticLoadPlaces();
    var planes = staticLoadPlanes();
    renderPlanes(planes);
    //renderPlaces(places);
};
//     https://www.latlong.net/      use the website to find latitude and longitude of a location  
function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: 64.749492,
                lng: 20.959880
            }
        },
        {
            name: 'Magnemite2',
            location: {
                lat: 64.749483,
                lng: 20.959466
            }
        },
        {
            name: 'Magnemite3',
            location: {
                lat: 64.749291,
                lng: 20.959171
            }
        },
        {
            name: 'Magnemite4',
            location: {
                lat: 64.749348,
                lng: 20.958345
            }
        },
    ];
}
function staticLoadPlanes() {
    return [
        {
            name: 'plane01',
            location: {
                lat: 64.749492,
                lng: 20.959880,
                scl: '1 1 1'
            }
        },
        {
            name: 'plane02',
            location: {
                lat: 64.749428,
                lng: 20.959106,
                scl: '10 10 10'
            }
        }
    ];
}
function renderPlaces(places) {
    var scene = document.querySelector('a-scene');
    places.forEach(function (place) {
        var latitude = place.location.lat;
        var longitude = place.location.lng;
        var model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', "latitude: ".concat(latitude, "; longitude: ").concat(longitude, ";"));
        model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');
        model.addEventListener('loaded', function () {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
        });
        if (scene != null)
            scene.appendChild(model);
    });
}
function renderPlanes(planes) {
    var scene = document.querySelector('a-scene');
    planes.forEach(function (plane) {
        var latitude = plane.location.lat;
        var longitude = plane.location.lng;
        var scale = plane.location.scl;
        var model = document.createElement('a-plane');
        model.setAttribute('gps-entity-place', "latitude: ".concat(latitude, "; longitude: ").concat(longitude, ";"));
        model.setAttribute('look-at', '#camera');
        model.setAttribute('scale', "".concat(scale));
        model.setAttribute('material', 'shader: ocean; color: blue;');
        model.addEventListener('loaded', function () {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
        });
        if (scene != null)
            scene.appendChild(model);
    });
}
