<template>
  <div id="map" class="w-full h-screen"></div>
</template>

<script>
export default {
  methods: {
    getposition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.error("map error");
      }
    },
    showPosition(position) {
      var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      mapboxgl.accessToken =
        "pk.eyJ1Ijoic3VkYW5hIiwiYSI6ImNram9janJyMDBsbzQycXByamk3YTF2Y3IifQ.b2k03u2jwHh_2Q0n1AkCvg";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 9, // starting zoom
      });
      map.addControl(new mapboxgl.NavigationControl());
      var marker = new mapboxgl.Marker();
      marker.setLngLat([longitude, latitude]).addTo(map);
      var geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-77.032, 38.913],
            },
            properties: {
              title: "Mapbox",
              description: "Washington, D.C.",
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-122.414, 37.776],
            },
            properties: {
              title: "Mapbox",
              description: "San Francisco, California",
            },
          },
        ],
      };

      geojson.features.forEach(function (marker) {
        // create a HTML element for each feature
        var el = document.createElement("div");
        el.className = "marker";

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });
    },
  },
  mounted() {
    this.getposition();
  },
};
</script>

<style>
.marker {
  background-image: url("/../mapbox-icon.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
.mapboxgl-ctrl-top-left {
  margin-top: 100px;
}
.mapboxgl-ctrl-top-right {
  margin-top: 100px;
}
</style>