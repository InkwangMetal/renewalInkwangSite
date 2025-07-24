<template>
  <div class="tab_wrap">
    <div class="tab_menu" :class="{ active : active === idx }" v-for="(menu, idx) in menuList" @click="clickTab(idx)">
      {{ menu.title }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  menuList : {
    type:Array,
  }
})

const emit = defineEmits(['update:tabNum'])
const active = ref(0)

const clickTab = (idx) => {
  active.value = idx
  emit('update:tabNum', idx)
}
</script>