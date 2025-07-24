<template>
  <AppHeader/>
  <router-view :key="route.fullPath" />
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style>
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}

#app > div:last-child {
  overflow-y: scroll;
}
</style>
