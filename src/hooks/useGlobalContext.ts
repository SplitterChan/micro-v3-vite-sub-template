// import { toRefs } from 'vue';
import { name } from '~/package.json';

export default function useGlobalContext() {
  const state = window.$wujie.props;

  const setState = (data: any, packageName = name) => {
    window.$wujie?.bus.$emit('store-inject', packageName, data);
  };
  return {
    state,
    setState
  };
}
