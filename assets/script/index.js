'use strict';

//=====================================================================================


const heading = select('.heading');
const center = select('.center');
const anim = select('.anim');
const loading = select('.loading');
//==================================================================================

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}



//==============================================================================
mapboxgl.accessToken = 'pk.eyJ1IjoidGFzaHBhbnJhIiwiYSI6ImNsYmdyd25nczBjNngzd3EzYWdqd2draXUifQ.xlyJIjdH5g74vO5ITOU0zQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/tashpanra/clbl0uv2a000c14p7zq6034zo', // style URL
    center: [0, 0], // starting position [lng, lat]
    attributionControl: false,
    pitch: 40,
    zoom: 16, // starting zoom
});

map.dragPan.disable();
map.keyboard.disable();
map.scrollZoom.disable();
map.touchZoomRotate.disable();
map.doubleClickZoom.disable();

const marker = new mapboxgl.Marker({
    color: "#c94040",
});

//==============================================================================


function getLocation(position) {


    const { latitude, longitude } = position.coords;

    if (longitude && latitude) {
        map.setCenter([longitude, latitude]);
        marker.setLngLat([longitude, latitude]).addTo(map);
        setTimeout(() => { anim.style.display = 'none' }, 750);
        heading.style.visibility = 'visible';
    }

}

function errorHandler(error) {
    loading.style.animationPlayState = 'paused';
    console.log(error.message);
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 0
};

// The watchPosition() method is used to register a handler funtion that will be called automatically each time the position of the device.


if (navigator.geolocation) {
    const geo = navigator.geolocation;
    geo.watchPosition(getLocation, errorHandler, options);
} else {
    console.log('Geolocation is not supported by your browser');
}



//==============================================================================
