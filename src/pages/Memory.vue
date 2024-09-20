<template>
  <base-layout PageTitle="All Memory">
    <memories-list :memories="memories"/>
  </base-layout>
</template>
<script setup lang="ts">
import { useMemoriesStore } from "../store/memories";
import MemoriesList from "../components/memories/MemoriesList.vue"
import { computed } from "vue";
const memoriesStore = useMemoriesStore();

const memories = computed(() => {
  return memoriesStore.getMemories;
});
</script>