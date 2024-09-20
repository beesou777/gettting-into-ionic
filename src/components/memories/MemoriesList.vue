<template>
     <ion-list>
     <memories-list-item v-for="memory in props.memories" :key="memory.id" :memory="memory"/>
    </ion-list>
</template>
<script setup lang="ts">
import { IonList} from "@ionic/vue";
import MemoriesListItem from "./MemoriesListItem.vue";

const props = defineProps({
  memories: {
    type: Array,
    required: true,
  },
})
</script>