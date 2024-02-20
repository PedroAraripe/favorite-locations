<template>
  <div style="height:600px; width:800px">
    <button type="button" @click="changeLocation" style="margin-bottom:1.5rem;"> 
      change center location
    </button>
    <MainMap @new-point="addNewPoint" :center="mapCenter" :points="mapPoints" /> 
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import MainMap from "@/components/map/MainMap.vue";
import { type ILatLng } from "@/interfaces/MainMap";

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


const mapPoints = ref([
  {
    id: 1,
    title: "Castelão",
    latLng: {
      lat: -3.76885 ,
      lng: -38.58628,
    }
  },
  {
    id: 2,
    title: "Presidente Vargas",
    latLng: {
      lat: -3.7460200 ,
      lng: -38.5368227,
    }
  },
]);

const addNewPoint = (latLng: ILatLng) => {
  const id = mapPoints.value.length + 1;
  const title = `Point ${id}`;
  
  mapPoints.value.push({
    id,
    title,
    latLng
  })
  
}
</script>

<style></style>