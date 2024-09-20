<template>
    <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    <h2 class="ion-text-center">{{ memory.title }}</h2>
    <p class="ion-text-center">{{ memory.description }}</p>
</template>
<script setup lang="ts">
import {IonImg} from "@ionic/vue";

const props = defineProps({
  memory: {
    type: Object,
    required: true,
  },
});
const memory = props.memory;
</script>
