// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [

];

mapboxgl.accessToken = 'pk.eyJ1IjoicmljaGFyZHNvbmNocmlzaiIsImEiOiJja29ub3VtNHYwMnpiMnBvaG5vY2xhNTJiIn0.4Twbro-jb1XxE4KnSrR47g';

// This is the map instance of downtown Atlanta
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-84.38961, 33.75473], // starting position [lng, lat]
    zoom: 14 // starting zoom
});


const fetchPromise = fetch("http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus/");
fetchPromise.then(response => {
    console.log(response);
});