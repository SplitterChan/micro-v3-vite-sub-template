<script setup lang="ts">
import { toRefs, defineAsyncComponent } from 'vue';

const pages = import.meta.glob('@/pages/**/*.vue');

const props = defineProps<{ name: string; path: string }>();

const { name, path } = toRefs(props);

const AsyncComponent = defineAsyncComponent(
  pages[`/src/pages/${path.value}.vue`]
);
</script>
<template>
  <AsyncComponent :name="name" />
</template>
