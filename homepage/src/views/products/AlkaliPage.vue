<template>
  <div class="main_container">
    <div>
      <BackgroundImg :imgSrc="bgImg" :content="content"/>
      <SidebarMenu :menu="menuItem" />
    </div>
    <div class="main_content">
      <div class="content_wrap">
        <div class="content product alkali">
          <h1 class="title">알카리 착색</h1>
          <CustomTab :menuList="menuList" @update:tabNum="tabInfo" />
          <div class="body" v-if="tabIdx === 0">
            <div class="left_wrap">
              <div class="img_wrap">
                <img :src="PhosphateImg"/>
              </div>
            </div>
            <div class="right_wrap">
              <ul class="section-list">
                <li>
                  <strong>제품 목적</strong>
                  <p>
                    금속 제품을 화학 약품 탱크에 일정 시간 담가 표면을 처리함으로써,<br/> 부식을 방지하는 공정입니다.
                  </p>
                </li>
                <li>
                  <strong>제품 특징</strong>
                  <ul>
                    <li>유광 마감</li>
                    <li>흑색 색상 [ 소재의 특성에 따라 색상 차이가 있을 수 있음 ]</li>
                    <li>두께 변화 없음 [ 정밀 가공 부품에 적합 ]</li>
                    <li>내식성 약함</li>
                  </ul>
                </li>
                <li>
                  <strong>주요 용도</strong>
                  <ul>
                    <li>자동차 부품</li>
                    <li>산업용 기계류</li>
                    <li>정밀 가공 부품</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="body detail" v-else>
            <div class="img_wrap">
              <img src="../../assets/images/ak_1.jpeg" />
            </div>
            <div class="img_wrap">
              <img src="../../assets/images/ak_3.jpeg" />
            </div>
            <div class="img_wrap">
              <img src="../../assets/images/ak_2.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarMenu from '@/components/common/SidebarMenu.vue'
import BackgroundImg from '@/components/common/BackgroundImg.vue'
import CustomTab from '@/components/common/CustomTab.vue'
import bgImg from '@/assets/images/product_img.jpg'
import PhosphateImg from '@/assets/images/alkali_img.jpeg'

const tabIdx = ref(0)
const menuItem = [
  { title: '인산염피막', path: '/products/phosphate' },
  { title: '알카리착색', path: '/products/alkali' }
]

const content = {
  title: '제품소개',
  desc:'인산염피막, 알카리착색 전문 기업'
}

const menuList = [
  { title: '알카리착색' },
  { title: '제품상세' },
]

const tabInfo = (idx) => {
  tabIdx.value = idx
}
</script>

<style scoped>
</style>
