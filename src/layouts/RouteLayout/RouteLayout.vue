<script setup lang="ts">
import { Route } from '@/types/RouteType';
import { toRefs } from 'vue';
import BaseLayout from '@/layouts/BaseLayout/BaseLayout.vue';

const props = defineProps<Route>();

const { name, path } = toRefs(props);
</script>

<template>
  <div class="layout">
    <BaseLayout :path="path" :name="name" />
  </div>
</template>

<style scoped></style>
