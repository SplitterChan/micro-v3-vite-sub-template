<script setup lang="ts">
import useGlobalContext from '@/hooks/useGlobalContext';

const { state, setState } = useGlobalContext();

function changeGlobalState() {
  setState({ count: state['main'].count + 1 }, 'main');
}
</script>

<template>
  <div>
    <button @click="changeGlobalState">change</button>
  </div>
</template>

<style scoped></style>
