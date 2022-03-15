"use strict";
window.onload = () => {
    console.log("this happens");
    //let places = staticLoadPlaces();
    let planes = staticLoadPlanes();
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
                lng: 20.959880,
            }
        },
        {
            name: 'Magnemite2',
            location: {
                lat: 64.749483,
                lng: 20.959466,
            }
        },
        {
            name: 'Magnemite3',
            location: {
                lat: 64.749291,
                lng: 20.959171,
            }
        },
        {
            name: 'Magnemite4',
            location: {
                lat: 64.749348,
                lng: 20.958345,
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
        },
        {
            name: 'plane03',
            location: {
                lat: 64.749403,
                lng: 20.957143,
                scl: '100 100 100'
            }
        }
    ];
}
function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
        });
        if (scene != null)
            scene.appendChild(model);
    });
}
function renderPlanes(planes) {
    let scene = document.querySelector('a-scene');
    planes.forEach((plane) => {
        let latitude = plane.location.lat;
        let longitude = plane.location.lng;
        let scale = plane.location.scl;
        let model = document.createElement('a-plane');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('look-at', '#camera');
        model.setAttribute('scale', `${scale}`);
        model.setAttribute('material', '');
        model.setAttribute('src', '#planeImage');
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
        });
        if (scene != null)
            scene.appendChild(model);
    });
}
