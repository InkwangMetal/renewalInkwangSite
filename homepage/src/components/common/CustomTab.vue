<template>
  <div class="tab_wrap">
    <div class="tab_bg" :style="sliderStyle"></div>
    <div class="tab_menu" ref="tabButtons" :class="{ active : active === idx }" v-for="(menu, idx) in menuList" @click="clickTab(idx)">
      {{ menu.title }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps({
  menuList : {
    type:Array,
  }
})
const emit = defineEmits(['update:tabNum'])

const sliderStyle = ref({})
const tabButtons = ref([])

const active = ref(0)

const clickTab = async (idx) => {
  active.value = idx
  emit('update:tabNum', idx)
  await nextTick()
  updateSlider()
}

const updateSlider = () => {
  const el = tabButtons.value[active.value]
  if (el) {
    sliderStyle.value = {
      width: `${el.offsetWidth}px`,
      transform: `translateX(${el.offsetLeft}px)`
    }
  }
}

onMounted(() => {
  updateSlider()
})
</script>