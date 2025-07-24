<template>
  <div class="main_container">
    <div>
      <BackgroundImg :imgSrc="bgImg" :content="content"/>
      <SidebarMenu :menu="menuItem" />
    </div>
    <div class="main_content">
      <div class="content_wrap">
        <div class="content location">
          <h1 class="title">오시는길</h1>
          <div class="body">
            <div class="left_wrap">
              <div class="map"></div>
            </div>
            <div class="right_wrap">
              <div class="top_wrap">
                <div class="title">
                  <i class="icon-map-pin"></i>
                  <span>Location</span>
                  <div class="line"></div>
                </div>
                <p>
                  부산광역시 사상구 낙동대로1338번길 68 (삼락동, 인광금속)<br/>
                  68, Nakdong-daero 1338beon-gil, Sasang-gu, Busan, Republic of Korea
                </p>
              </div>
              <div class="bottom_wrap">
                <div class="title">
                  <i class="icon-message-circle"></i>
                  <span>Contact</span>
                  <div class="line"></div>
                </div>
                <div class="contact-info">
                  <div class="contact-item">
                    <span class="label">Tel</span>
                    <span class="value">051-324-5051</span>
                  </div>
                  <div class="contact-item">
                    <span class="label">Fax</span>
                    <span class="value">051-324-5053</span>
                  </div>
                  <div class="contact-item">
                    <span class="label">Email</span>
                    <span class="value">cc707200@hanmail.net</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
