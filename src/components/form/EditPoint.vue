<template>
  <div v-if="point">
    {{ point }}
  </div>
</template>

<script setup lang="ts">
  import { type IPropPointMap } from "@/interfaces/MainMap";
  import { type PropType } from "vue";

  const props = defineProps({
    point: {
      type: Object as PropType<IPropPointMap | null>,
      default: null,
    }
  });
</script>