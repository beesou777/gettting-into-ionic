<template>
  <base-layout :PageTitle="loadedMemory ? loadedMemory.title : 'Loading...'" pageDefaultBackLink="/memories">
    <memory-overview v-if="loadedMemory" :memory="loadedMemory"/>
  </base-layout>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useMemoriesStore } from "../store/memories";
import { useRoute } from "vue-router";
import MemoryOverview from "../components/memories/MemoryOverview.vue";

const route = useRoute();

const memoryId = ref<number | null>(null);

const memoriesStore = useMemoriesStore();

const loadedMemory = computed(() => {
  return memoriesStore.getMemory(memoryId.value as number);
});

watch(
  () => route.params.id,
  (newId) => {
    memoryId.value = Number(newId); 
  },
  { immediate: true }
);
</script>

