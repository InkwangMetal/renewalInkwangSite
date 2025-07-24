<template>
  <div class="main_container">
    <Swiper
       v-bind="swiperOptions"
      :modules="[ Autoplay ]"
      class="home_swiper"
    >
      <SwiperSlide 
        class="slide"
        v-for="(item, index) in slidList"
        :key="index"
        :style="{ backgroundImage: `url(${item.img})`}"
      >
        <div class="overlay"></div>
        <span class="main_title" :class="item.class">{{ item.text }}</span>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import bgImg from '@/assets/images/main_1.jpeg'
import bgImg1 from '@/assets/images/main_2.jpeg'
import bgImg2 from '@/assets/images/main_3.jpeg'
import bgImg3 from '@/assets/images/main_4.jpeg'

const slidList = [
  {
    img: bgImg,
    text: `인산염피막, 알카리착색 전문 \n인광금속`
  },
  {
    img: bgImg1,
    text: '높은 기술력으로 만드는 \n인광금속의 미래'
  },
  {
    img: bgImg2,
    text: '뛰어난 기술로 더 나은 \n미래를 만들어가는 인광금속'
  },
  {
    img: bgImg3,
    text: '파트너와 함께 성장하는 \n인광금속이 \n미래를 창조합니다.',
    class: 'text-center'
  },
]

const swiperOptions = ref({
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
})
</script>