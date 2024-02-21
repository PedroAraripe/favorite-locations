<template>
  <div class="wrapper-register-locations">
    <button type="button" @click="changeLocation" style="margin-bottom:1.5rem;"> 
      change center location
    </button>
    <div class="wrapper-map-form">
      <MainMap
        style="height:600px; width:800px"
        @new-point="addNewPoint"
        @editing-point="editPoint"
        :center="mapCenter"
        :points="mapPoints"
      /> 
      <EditPoint :point="currentEditingPoint" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import MainMap from "@/components/map/MainMap.vue";
import EditPoint from "@/components/form/EditPoint.vue";
import { type IPropPointMap, type ILatLng } from "@/interfaces/MainMap";
const currentEditingPoint: Ref<IPropPointMap | null> = ref(null);

const stadiumsCoordinate: any = {
  "big-castle": [-3.76885 , -38.58628],
  "vargas-president": [-3.7460200 , -38.5368227]
};

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
};

const editPoint = (point: IPropPointMap) => {
  currentEditingPoint.value = point;
}
</script>

<style lang="scss" scoped>
.wrapper-register-locations {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .wrapper-map-form {
    display: flex;
    align-items: center;
    justify-content: start;
  }
}
</style>