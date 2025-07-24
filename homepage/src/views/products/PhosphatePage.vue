<template>
  <div class="main_container">
    <div>
      <BackgroundImg :imgSrc="bgImg" :content="content"/>
      <SidebarMenu :menu="menuItem" />
    </div>
    <div class="main_content">
      <div class="content_wrap">
        <div class="content product">
          <h1 class="title">인산염 피막</h1>
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
                    금속 제품을 화학약품 탱크에 담가 피막을 형성하여<br/>
                    부식과 녹 발생을 방지하는 표면 처리 공정입니다.
                  </p>
                </li>
                <li>
                  <strong>제품 특징</strong>
                  <ul>
                    <li>무광 마감</li>
                    <li>망간계 처리에 비해 색이 연함</li>
                    <li>미세한 두께 증가</li>
                    <li>우수한 내식성</li>
                  </ul>
                </li>
                <li>
                  <strong>주요 용도</strong>
                  <ul>
                    <li>도장하지용 전처리</li>
                    <li>자동차 부품</li>
                    <li>산업용 기계류</li>
                    <li>선박 관련 부품</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="body detail" v-else>
            <div class="img_wrap">
              <img src="../../assets/images/pp_1.jpeg" />
            </div>
            <div class="img_wrap">
              <img src="../../assets/images/pp_2.jpeg" />
            </div>
            <div class="flex-col">
              <div class="img_wrap">
                <img src="../../assets/images/pp_3.jpeg" />
              </div>
              <div class="img_wrap">
                <img src="../../assets/images/pp_4.jpeg" />
              </div>
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
import PhosphateImg from '@/assets/images/phosphate_img.jpeg'

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
  { title: '인산염피막' },
  { title: '제품상세' },
]

const tabInfo = (idx) => {
  tabIdx.value = idx
}
</script>

<style scoped>
</style>
