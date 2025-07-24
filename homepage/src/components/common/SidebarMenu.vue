<template>
  <aside class="side_menu">
    <div>
      <nav class="menu_wrap" v-for="(menu, idx) in menu" :key="idx">
        <RouterLink class="menu" :to="menu.path">
          {{ menu.title }}
          <i class="icon-arrow-down-circle" v-show="menu.path === currentPath"></i>
        </RouterLink>
      </nav>
    </div>
  </aside>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = ref(route.path)

const props = defineProps({
  menu: {
    type: Object,
    default : ()=>({})
  }
})
</script>