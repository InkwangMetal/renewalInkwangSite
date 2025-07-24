<template>
  <div class="main_container">
    <div>
      <BackgroundImg :imgSrc="bgImg" :content="content"/>
      <SidebarMenu :menu="menuItem" />
    </div>
    <div class="main_content">
      <div class="content_wrap">
        <Greeting />
      </div>
    </div>
  </div>
</template>

<script setup>
import Greeting from '@/components/Greeting.vue'
import SidebarMenu from '@/components/common/SidebarMenu.vue'
import BackgroundImg from '@/components/common/BackgroundImg.vue'
import bgImg from '@/assets/images/background_img_1.jpg'

const menuItem = [
  { title: '인사말', path: '/company/greeting' },
  { title: '오시는길', path: '/company/location' }
]

const content = {
  title: '회사소개',
  desc:'뛰어난 기술로 더 나은 미래를 만들어가는 기업'
}

</script>

<style scoped>
</style>
