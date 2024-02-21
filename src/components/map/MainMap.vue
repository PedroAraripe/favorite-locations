<template>
  <l-map
    ref="map"
    :zoom="zoom"
    :center="mapCenter"
    :use-global-leaflet="false"
    @mouseDown.middle="mapClickHandler"
    class="wrapper-map"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    />
    <l-marker
      v-for="point in points"
      :key="point.id"
      :lat-lng="point.latLng"
    >
      <l-tooltip class="location-item" :options="{ permanent: true, interactive: true }">
        <div>
          {{ point.title }}
        </div>

        <button class="edit-markup" @click="editItem(point)">
          <FontAwesomeIcon :icon="faPen" />
        </button>
      </l-tooltip>
    </l-marker>
  </l-map>
  <!-- {{ showingPoints }} -->
</template>

<script setup lang="ts">
  import { type IPropPointMap, type ILatLng } from "@/interfaces/MainMap";
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faPen } from '@fortawesome/free-solid-svg-icons'

  const props = defineProps({
    zoom: {
      type: Number,
      default: 20,
    },
    mapCenter: {
      type: Array<Number>,
      default: [],
    },
    points: {
      type: Array<IPropPointMap>,
      default: [],
    }
  });

  const mapClickHandler = (e) => {
    const isMiddleButton = e.originalEvent.button === 1;

    if(isMiddleButton) {
      const { latlng } = e;
  
      addNewPoint(latlng);

    }
  };

const emit = defineEmits(["new-point", "editing-point"]);

const addNewPoint = (latLng: ILatLng) => emit("new-point", latLng);

const editItem = (point: IPropPointMap) => {
  emit("editing-point", point);
}
</script>

<style lang="scss" scoped>
.wrapper-map {

  .location-item {
    & .edit-markup {
      display: none;
    }
    
    &:hover {
      & .edit-markup {
        display: block;
      }
    }
  }
}
</style>