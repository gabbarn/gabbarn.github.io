import * as THREE from 'three';
type Places = {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
}

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
function staticLoadPlanes(){
    return [
        {
            name: 'plane01',
            location: {
                lat: 64.749492,
                lng: 20.959880,
            }
        }
    ]
}

function renderPlaces(places: Places[]){
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
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });
       if(scene != null)
        scene.appendChild(model);
   });
}

function renderPlanes(planes: Places[]){
    let scene = document.querySelector('a-scene');

    planes.forEach((plane) => {
        let latitude = plane.location.lat;
        let longitude = plane.location.lng;

        let model = document.createElement('a-plane');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('look-at', '#camera');
        model.setAttribute('scale', '1 1 1');
    })
}