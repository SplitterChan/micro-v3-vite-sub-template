<script setup lang="ts">
import RouteLayout from '@/layouts/RouteLayout/RouteLayout.vue';
</script>

<template>
  <div class="layout">
    <RouteLayout name="test" path="test/index" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
