<template>
  <div class="grid grid-cols-2">
    <div class="w-full relative">
      <div
        class="absolute top-0 left-0 w-full h-20 z-10 flex items-center justify-center"
      >
        <Search />
      </div>
      <div id="map" class="w-full h-screen"></div>
    </div>
    <div class="w-full flex flex-col space-y-3">
      <div class="w-3/4 mx-auto my-3">
        <h3 class="text text-2xl py-1">Tempat pariwisata</h3>
        <MiniCard
          :data="[
            {
              name: 'besakih',
              photo:
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=677&q=80',
            },
            {
              name: 'pura lempuyang',
              photo:
                'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
            },
            {
              name: 'ayunan',
              photo:
                'https://images.unsplash.com/photo-1554481923-a6918bd997bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80',
            },
          ]"
        />
      </div>
      <div class="w-3/4 mx-auto my-3">
        <h3 class="text text-2xl py-1">Hotel</h3>
        <MiniCard
          :data="[
            {
              name: 'ciudad',
              photo:
                'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80',
            },
            {
              name: 'johanson',
              photo:
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
            },
            {
              name: 'curtis',
              photo:
                'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
            },
          ]"
        />
      </div>
      <div class="w-3/4 mx-auto my-3">
        <h3 class="text text-2xl py-1">Restoran</h3>
        <MiniCard
          :data="[
            {
              name: 'tanya',
              photo:
                'https://images.unsplash.com/photo-1610538625499-635bf13427b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80',
            },
            {
              name: 'sedulur',
              photo:
                'https://images.unsplash.com/photo-1601636921390-909651e7cd57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            },
            {
              name: 'papat',
              photo:
                'https://images.unsplash.com/photo-1601893211509-81b6d03e46a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            },
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../../components/input/search";
import MiniCard from "../../components/slider/mini_card";
export default {
  components: {
    Search,
    MiniCard,
  },
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
        style: "mapbox://styles/sudana/ckmlkp1lt1dvh17qntavr400s",
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
  z-index: 1000;
}
.mapboxgl-ctrl-top-right {
  margin-top: 100px;
  z-index: 1000;
}
</style>