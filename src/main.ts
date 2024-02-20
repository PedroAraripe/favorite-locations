import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-popup', LPopup);
app.component('l-tooltip', LTooltip);

app.mount('#app')
