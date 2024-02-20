<template>
  <l-map
    ref="map"
    :zoom="zoom"
    :center="mapCenter"
    :use-global-leaflet="false"
    @mouseDown.middle="mapClickHandler"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    />
    <l-marker v-for="point in points" :lat-lng="point.latLng" :key="point.id">
      <l-tooltip :options="{ permanent: true, interactive: true }">
        <div>
          {{ point.title }}
        </div>
      </l-tooltip>
    </l-marker>
  </l-map>
  <!-- {{ showingPoints }} -->
</template>

<script setup lang="ts">
  import { IPropPointMap, ILatLng } from "@/interfaces/MainMap";

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
    const isMiddleButton = e.originalEvent.button;

    if(isMiddleButton) {
      const { latlng } = e;
  
      addNewPoint(latlng);

    }
  }

const emit = defineEmits(["new-point"])

const addNewPoint = (latLng: ILatLng) => emit("new-point", latLng)
</script>