<template>
  <div class="content">
    <h1 class="title">인사말</h1>
    <div class="body">
      <p class="left_wrap">
        환영합니다.<br/>
        <span class="t_bold">인산염피막 · 알카리착색</span> 전문기업<br/>
        <span class="t_bold blue">인광금속</span> 입니다.
      </p>
      <p class="right_wrap">
        <span>인광금속</span>은 10년 이상 차곡차곡 쌓아온 실력과 성실함을 바탕으로<br/>
        저희를 찾아 주시는 고객분들에게 꼭 필요한 파트너가 되고자 합니다.<br/><br/>
        최신 설비와 축적된 기술력을 바탕으로 <br/>보다 신속하고
        우수한 품질의 제품을 생산하며, <br/>고객 만족을 위해 최선을 다하겠습니다.<br/><br/>
        인광금속을 찾아주시는 모든 분들의 사업이 더욱 번창하시길 바라며,<br/>
        저희 또한 고객과 함께 성장해 나가겠습니다.<br/>
        감사합니다.<br/><br/>
        <span class="text_r">대표 <span class="t_bold">이순수 & 최지연</span> </span>
      </p>
    </div>
    <div class="company_img">
      <img
          :src="CompanyImg"
          alt="회사 이미지"
          class=""
        />
    </div>
  </div>
</template>
<script setup>
import CompanyImg from '@/assets/images/greeting_img.jpeg'

</script>
