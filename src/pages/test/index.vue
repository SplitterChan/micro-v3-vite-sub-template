<script setup lang="ts">
import useGlobalContext from '@/hooks/useGlobalContext';
import useDispatchRouteChange from '@/hooks/useDispatchRouteChange';

const { state, setState } = useGlobalContext();

const { dispatch } = useDispatchRouteChange();

function changeGlobalState() {
  setState({ count: (state['main']?.count ?? 0) + 1 }, 'main');
}

function goToLogin() {
  dispatch('/login');
}
</script>

<template>
  <div>
    <a-button type="primary" @click="changeGlobalState">change</a-button>
    <a-button status="danger" @click="goToLogin">跳转登录</a-button>
  </div>
</template>

<style scoped></style>
