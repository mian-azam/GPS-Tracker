'use strict';

//=====================================================================================


const heading = select('.heading');
const center = select('.center');
//==================================================================================

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}



//==============================================================================

function getLocation(position) {
    heading.style.visibility = 'visible';
    const { latitude, longitude } = position.coords;

    mapboxgl.accessToken = 'pk.eyJ1IjoidGFzaHBhbnJhIiwiYSI6ImNsYmdyd25nczBjNngzd3EzYWdqd2draXUifQ.xlyJIjdH5g74vO5ITOU0zQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/tashpanra/clbl0uv2a000c14p7zq6034zo', // style URL
        center: [longitude, latitude], // starting position [lng, lat]
        attributionControl: false,
        zoom: 16, // starting zoom
    });


    const marker = new mapboxgl.Marker({
        color: "#c94040",
        draggable: true
    }).setLngLat([longitude, latitude])
        .addTo(map);

}

function errorHandler(error) {
    console.log(error.message);
}

const options = {
    enableHighAccuracy: true
};


window.addEventListener('load', () => {
    if (navigator.geolocation) {

        const geo = navigator.geolocation;
        geo.getCurrentPosition(getLocation, errorHandler, options);
    } else {
        console.log('Geolocation is not supported by your browser');
    }
});


//==============================================================================
