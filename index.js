let dimensional;
let lat;
let long;
mapboxgl.accessToken = "pk.eyJ1IjoiYWxhYWFiZGVsbW90bGVwIiwiYSI6ImNsMjR2eGN6ODIzbG8zY21ra2lubXh5ZHkifQ.yZJ_VTWzg0OeuNj84z8-xA";
const map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11",
  center: [31.233334, 30.033333],
  zoom: 10,
});

map.on("click", (e) => {
  document.getElementById("info").innerHTML = dimensional = JSON.stringify(
    e.lngLat.wrap()
  );
  lat = JSON.parse(dimensional).lat;
  console.log(lat);
  lng = JSON.parse(dimensional).lng;
  console.log(lng);

  document.getElementById("report_lat").value= lat
  document.getElementById("report_long").value= lng

});

