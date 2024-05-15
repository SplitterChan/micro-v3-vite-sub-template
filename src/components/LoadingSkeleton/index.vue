<script setup lang="ts">
import { ref } from 'vue';
const animation = ref(true);
</script>
<template>
  <div class="layout">
    <a-skeleton :animation="animation">
      <a-space direction="vertical" :style="{ width: '100%' }" size="large">
        <a-skeleton-line :rows="3"></a-skeleton-line>
        <a-skeleton-shape></a-skeleton-shape>
      </a-space>
    </a-skeleton>
  </div>
</template>
<style></style>
