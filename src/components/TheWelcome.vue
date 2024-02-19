<template>
  <div style="height:600px; width:800px">
    <button type="button" @click="changeLocation" style="margin-bottom:1.5rem;"> 
      change center location
    </button>
    <l-map ref="map" :zoom="zoom" :center="mapCenter" :use-global-leaflet="false">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";

const zoom: number = 20;

const stadiumsCoordinate: any = {
  "big-castle": [-3.76885 , -38.58628],
  "vargas-president": [-3.7460200 , -38.5368227]
}

const mapCenter: Ref<number[]> = ref(stadiumsCoordinate["vargas-president"]);

const changeLocation = () => 
  mapCenter.value = mapCenter.value[0] === stadiumsCoordinate["big-castle"][0] ?
    stadiumsCoordinate["vargas-president"]:
    stadiumsCoordinate["big-castle"];
</script>

<style></style>