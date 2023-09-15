<script setup lang="ts">
import { toRefs, withDefaults, defineProps } from 'vue';
import { useGlobalStore } from '@/stores/global';

interface IProps {
  name: string;
  url: string;
}

const { globalState } = useGlobalStore();

const props = withDefaults(defineProps<IProps>(), {
  name: '',
  url: ''
});

const { name, url } = toRefs(props);
</script>

<template>
  <WujieVue :nam="name" :url="url" :props="globalState" />
</template>

<style lang="scss" scoped></style>
