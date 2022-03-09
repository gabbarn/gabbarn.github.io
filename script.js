window.onload = () => {
    console.log("this happens");
    let places = staticLoadPlaces();
    renderPlaces(places);
     if(window.DeviceOrientationEvent){
         window.addEventListener("deviceorientation", instantiateCamera, true)
       }else{
         console.log("DeviceOrientationEvent is not supported");
         document.querySelector("#div1").innerHTML = "0";
       }
    
};
var count;
function instantiateCamera(event){
    count++;
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    console.log(alpha);
    document.querySelector("#div1").innerHTML = count;
}

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
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}