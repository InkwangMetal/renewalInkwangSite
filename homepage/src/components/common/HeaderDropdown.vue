<template>
  <div class="dropdown_box" ref="headerDropdown">
    <span class="opt_title">{{ options.title }}</span>
    <div class="opt_wrap" v-if="options.subnav">
      <template v-for="(item, idx) in options.subnav">
          <span
            class="option"
            @click="$emit('select-option', $event, options.path + item.path)"
            >{{ item.title }}</span
          >
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  options: { type: Object, default: () => {} },
})
</script>
