<template>
  <div class="main_header">
    <div class="header_wrap">
      <img class="logo_img" :src="Logo" alt="/"/>
      <div class="gnb_wrap">
        <i
          @click="clickSelect(idx, item)"
          v-for="(item, idx) in navList"
          :key="idx"
          :class="[
            item.icon,
            { i_hidden : route.path.includes(item.path)}
          ]"
        >
          <HeaderDropdown
            :options="navList[idx]"
            @select-option="selectSubMenu"
          />
        </i>
      </div>
      <i class="icon-phone-incoming">
        <span>051-324-5053</span>
      </i>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Logo from '@/assets/images/ik_logo.png'
import HeaderDropdown from '@/components/common/HeaderDropdown.vue'
import { mainNavList } from '@/data/NavigationMenu'
import { useRouter, useRoute } from 'vue-router'

const navList = ref([...mainNavList])

const router = useRouter()
const route = useRoute()

const clickSelect = (idx, item) => {
  if (!item.subnav) {
    router.push(item.path)
  }
}

const selectSubMenu = (e, item) => {
  router.push(item)
}
</script>