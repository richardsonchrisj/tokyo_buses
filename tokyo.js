mapboxgl.accessToken = 'pk.eyJ1IjoicmljaGFyZHNvbmNocmlzaiIsImEiOiJja29ub3VtNHYwMnpiMnBvaG5vY2xhNTJiIn0.4Twbro-jb1XxE4KnSrR47g';

// This is the map instance of Japan Rail centered on Tokyo
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [139.76842272980838, 35.680995983317494], // starting position [lng, lat]
    zoom: 14 // starting zoom
});

//list of buses in Tokyo
let busList = []

//run once to get buses
function getBuses() {
    fetchPromise = fetch("https://api-tokyochallenge.odpt.org/api/v4/%22odpt:Bus?acl:consumerKey=RIwJ83sfSn8q_F_xBUkSVDScHYotKP8BQKT_0gT6EyM");

    fetchPromise.then(response => {
        return response.json();
    }).then(buses => {

        for (let i = 0; i < buses.length; i++) {

            let busNumber = buses[i]["odpt:busNumber"]
            console.log("busNumber = " + buses[i]["odpt:busNumber"]);

            let lat = buses[i]["geo:lat"]
            console.log("lat = " + buses[i]["geo:lat"]);

            let lng = buses[i]["geo:long"]
            console.log("lng = " + buses[i]["geo:long"]);

            if (lat > 35 && lat < 36) {

                var popup = new mapboxgl.Popup({
                        closeOnClick: false
                    })
                    .setLngLat([lng, lat])
                    .setHTML(busNumber)
                    .addTo(map);
            }

            busList.push(busNumber);
        }
    })
}


getBuses();

// let run = setInterval(getPositions, 5000);