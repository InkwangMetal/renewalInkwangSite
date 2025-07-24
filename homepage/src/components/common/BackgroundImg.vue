<template>
  <div class="bg_wrap">
    <img :src="props.imgSrc" />
    <div class="title_wrap">
      <span class="title">{{ content.title }}</span>
      <span class="desc">{{ content.desc }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc:{
    type:String,
  },
  content: {
    type:Object
  }
})
</script>