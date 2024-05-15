<script setup lang="ts">
import useGlobalContext from '@/hooks/useGlobalContext';

const { state, setState } = useGlobalContext();

function changeGlobalState() {
  setState({ count: (state['main']?.count ?? 0) + 1 }, 'main');
}
</script>

<template>
  <div>
    <a-button v-permission="['text']" type="primary" @click="changeGlobalState">change</a-button>
    <a-button status="danger">跳转登录</a-button>
  </div>
</template>

<style scoped></style>
<route>
  {
    meta: {
      title: '测试页面'
    }
  }
</route>
