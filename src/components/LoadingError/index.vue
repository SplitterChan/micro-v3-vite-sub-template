<script setup lang="ts">
const reload = () => {
  window.location.reload();
};
</script>
<template>
  <div class="layout" align="center">
    <div w-80>
      <div font-size="32px" color="#1482f0" font-700>OOPS!</div>
      <div font-size="13px" color="grey">页面加载失败，请刷新后重试</div>
      <a-button mt-10 type="primary" size="large" shape="round" @click="reload">
        重新加载
      </a-button>
    </div>
  </div>
</template>
<style></style>
