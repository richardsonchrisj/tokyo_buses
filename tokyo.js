// This is the map instance centered on Tokyo
mapboxgl.accessToken = "pk.eyJ1IjoicmljaGFyZHNvbmNocmlzaiIsImEiOiJja29ub3RpcDAwMzAwMnJvaDhrMmo0cjdxIn0.wbl9nYD0s0NUEHv9cBEs2A";
let map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [139.76842272980838, 35.680995983317494], // starting position [lng, lat]
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    pitch: 60,
    bearing: -60,
    zoom: 11
});

//run once to get buses
function getBuses() {
    const fetchPromise = fetch("https://api-tokyochallenge.odpt.org/api/v4/odpt:Bus?acl:consumerKey=RIwJ83sfSn8q_F_xBUkSVDScHYotKP8BQKT_0gT6EyM")
    fetchPromise.then(response => {
        return response.json();
    }).then(buses => {
        console.log(buses.length)

        for (let i = 0; i < 100; i++) {

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

        }
    })
}


let run = setInterval(() => {
    console.log(map);
    getBuses()
}, 5000);