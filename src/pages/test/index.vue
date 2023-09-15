<script setup lang="ts">
import useGlobalContext from '@/hooks/useGlobalContext';

const { setState } = useGlobalContext();

function changeGlobalState() {
  setState({ name: '4335' });
}
</script>

<template>
  <div>
    <button @click="changeGlobalState">change</button>
  </div>
</template>

<style scoped></style>
